import * as crypto from 'crypto';
import * as https from 'https';
import { URL } from 'url';
import { BaseContext } from '../arcTypes';

export interface IEventPayload {
    eventId: string;
    extendedProperties: Array<{key:string, value:any}>;
    topic: string;
    entityId: string;
    timestamp: string;
    correlationId: string;
    isTest: boolean;
}

export class EventSender {
    private readonly _context: BaseContext;

    constructor(context: BaseContext) {
        this._context = context;
    }

    /**
     * Makes an HTTPS POST request, implementing manual timeout and error handling
     * using Node.js built-in modules (https).
     * @param url The target URL.
     * @param payload The JSON payload to send.
     * @param timeout The request timeout in milliseconds.
     * @returns Resolves if the request succeeds (status < 300), otherwise rejects.
     */
    private async _makeRequest(url: string, payload: object, timeout: number): Promise<void> {
        return new Promise((resolve, reject) => {
            let reqUrl: URL;
            try {
                reqUrl = new URL(url);
            } catch (e) {
                return reject(new Error(`Invalid URL: ${url}. Error: ${(e as Error).message}`));
            }

            const postData = JSON.stringify(payload);

            const options: https.RequestOptions = {
                hostname: reqUrl.hostname,
                port: reqUrl.port ? parseInt(reqUrl.port, 10) : 443, // Ensure port is number or default 443
                path: reqUrl.pathname + reqUrl.search,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': Buffer.byteLength(postData),
                    'Connection': 'close',
                },
            };

            const req = https.request(options, (res: any) => {
                let responseBody = '';

                if (res.statusCode && res.statusCode >= 300) {
                    res.on('data', (chunk:any) => {
                        responseBody += chunk;
                    });
                    res.on('end', () => {
                        reject(new Error(`Error response received. Status Code - ${res.statusCode}. Message - ${responseBody}`));
                    });
                    return;
                }

                res.on('data', () => { /* no-op */ });
                res.on('end', () => {
                    resolve();
                });
            });

            req.on('error', (e: Error) => {
                reject(e);
            });

            req.setTimeout(timeout, () => {
                req.destroy();
                reject(new Error(`Request timed out after ${timeout}ms.`));
            });

            req.write(postData);
            req.end();
        });
    }

    private _createPayload(
        topic: string,
        entityId: string,
        correlationId: string,
        extendedProperties: any
    ): IEventPayload {
        console.log('Creating payload with correlationId: ' + correlationId);

        const generateEventId = (): string => {
            if (typeof crypto.randomUUID === 'function') {
                return crypto.randomUUID();
            }
            return crypto.randomBytes(16).toString('hex');
        };

        return {
            "eventId": generateEventId(),
            "extendedProperties": extendedProperties,
            "topic": topic,
            "entityId": entityId,
            "timestamp": new Date().toISOString(),
            "correlationId": correlationId,
            "isTest": false
        };
    }

    /**
     * Sends the event with retry logic.
     * @param topic The event topic/type.
     * @param entityId The ID of the entity the event relates to.
     * @param extendedProperties Additional properties for the event.
     */
    public async sendEvent(topic: string, entityId: string, extendedProperties: any = []): Promise<void> {
        const MAX_ATTEMPTS = 3;
        const correlationId: string = this._context.apiContext.correlationId || "";
        const eventTimeout = this._context.configuration.eventTimeout;
        const webhookUrl = this._context.configuration.webhookUrl;

        if (!webhookUrl) {
            console.error('Event URL not found in context.configuration (key: webhookUrl). Event will not be sent.');
            return;
        }

        const timeout = eventTimeout || 3000;
        const eventPayload: IEventPayload = this._createPayload(topic, entityId, correlationId, extendedProperties);

        try {
            for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
                try {
                    console.log(`Attempting event ${attempt}/${MAX_ATTEMPTS} for topic '${topic}' to URL: ${webhookUrl}....`);

                    await this._makeRequest(webhookUrl, eventPayload, timeout);

                    console.log(`Attempt ${attempt} - SUCCESS`);
                    return;

                } catch (e) {
                    console.log(`Attempt ${attempt} Failed - ${(e as Error).message}`);

                    if (attempt === MAX_ATTEMPTS) {
                        console.log(`EVENT SEND TOTAL FAILURE for topic '${topic}'`);
                        console.log(e);
                        throw e;
                    }
                }
            }
        } finally {
            console.log('EVENT PAYLOAD');
            console.log('--------------');
            console.log(JSON.stringify(eventPayload, null, 2));
        }
    }
}