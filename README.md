# Kibo API Extensions Starter Kit

A comprehensive TypeScript starter kit for developing Kibo API Extensions. This project provides a structured foundation for creating custom business logic that hooks into various Kibo Commerce platform events such as cart operations, order processing, product management, payments, and more.

## Table of Contents

- [Project Structure](#project-structure)
- [Architecture Overview](#architecture-overview)
- [Getting Started](#getting-started)
- [Implementing Functions](#implementing-functions)
- [Enabling Functions](#enabling-functions)
- [Development Workflow](#development-workflow)
- [Examples](#examples)
- [Event Sender Utility](#event-sender-utility)
- [Deployment](#deployment)
- [Tenant Configuration](#tenant-configuration)

## Project Structure

```
├── src/
│   ├── arcTypes/
│   │   └── index.ts              # Type definitions and helper functions
│   ├── functions/
│   │   ├── index.ts              # Exports all function implementations
│   │   ├── embedded.*.ts         # Embedded API extension functions
│   │   └── http.*.ts             # HTTP API extension functions
│   ├── main.ts                   # Function registration and enablement
│   └── platformInstall.ts        # Platform installation logic
├── assets/                       # Build output directory
├── mozu.config.json.example      # Configuration template
├── package.json                  # Dependencies and scripts
├── Gruntfile.js                  # Build configuration
└── README.md                     # This file
```

### Key Files

- **`src/main.ts`**: The central registration file where all API Extension functions are defined and enabled/disabled
- **`src/functions/`**: Contains individual function implementations for each API Extension point
- **`src/functions/index.ts`**: Barrel export file that imports and exports all function implementations
- **`src/arcTypes/index.ts`**: Contains TypeScript type definitions and utility functions for API Extensions
- **`mozu.config.json`**: Configuration file containing your Kibo application settings

## Architecture Overview

The project follows a modular architecture where:

1. **Function Files**: Each API Extension point has its own TypeScript file in `src/functions/`
2. **Registration**: Functions are registered in `src/main.ts` using the `createArcFunction` helper
3. **Enablement**: Functions are enabled/disabled through the `enabledFunctions` object in `src/main.ts`
4. **Build Process**: Grunt compiles TypeScript, runs linting, and uploads to your Kibo application

### Function Naming Convention

Function files follow the pattern: `{type}.{namespace}.{resource}.{operation}.{timing}.ts`

- **Type**: `http` or `embedded`
- **Namespace**: `commerce`, `customer`, etc.
- **Resource**: `carts`, `orders`, `products`, etc.
- **Operation**: `get`, `add`, `update`, etc.
- **Timing**: `before` or `after` (when applicable)

**Examples**:
- `http.commerce.customer.address.validation.before.ts`
- `embedded.commerce.carts.addItem.after.ts`
- `embedded.commerce.payments.action.performPaymentInteraction.ts`

## Getting Started

### Prerequisites

- Node.js (v20)
- A Kibo Commerce developer account
- Access to Kibo Dev Center

### Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure your application**:
   ```bash
   cp mozu.config.json.example mozu.config.json
   ```
   
   Edit `mozu.config.json` and fill in:
   - `email`: Your Kibo developer account email
   - `developerAccountId`: Your developer account ID
   - `applicationKey`: Your application key from Dev Center
   - Other environment-specific settings

3. **Build and upload**:
   ```bash
   grunt
   ```

## Implementing Functions

### Step 1: Create the Function File

Create a new TypeScript file in `src/functions/` following the naming convention:

```typescript
// src/functions/http.commerce.customer.address.validation.before.ts
import { Callback } from "../arcTypes";

function httpCommerceCustomerAddressValidationBefore(context: any, callback: Callback) {
    console.log("Address validation started", context.request.body);
    
    // Your custom logic here
    const address = context.request.body;
    
    // Example: Validate Pennsylvania addresses only
    if (address.stateOrProvince !== 'PA') {
        context.response.statusCode = 400;
        context.response.body = {
            errorCode: "INVALID_ADDRESS",
            message: "Only Pennsylvania addresses are supported"
        };
    }
    
    callback();
}

export default httpCommerceCustomerAddressValidationBefore;
```

### Step 2: Add Export to Index

Add your function to `src/functions/index.ts`:

```typescript
// Add import
import httpCommerceCustomerAddressValidationBefore from "./http.commerce.customer.address.validation.before";

// Add to exports
export {
  // ... other exports
  httpCommerceCustomerAddressValidationBefore,
};
```

### Step 3: Register in Main

Add your function registration in `src/main.ts`:

```typescript
// Create the Arc function
const httpCommerceCustomerAddressValidationBeforeFn = createArcFunction(
  ActionId["http.commerce.customer.address.validation.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerAddressValidationBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);
```

### Step 4: Add to Enabled Functions

Add your function to the `enabledFunctions` object (initially commented out):

```typescript
const enabledFunctions = {
  // "http.commerce.customer.address.validation.before": httpCommerceCustomerAddressValidationBeforeFn,
};
```

## Enabling Functions

### The Enablement Mechanism

Functions are controlled through the `enabledFunctions` object in `src/main.ts`. This object acts as a registry of active API Extensions:

1. **Commented Out** = **Disabled**: The function exists but won't be called
2. **Uncommented** = **Enabled**: The function will be active and respond to events

### How to Enable a Function

1. **Find the function** in the `enabledFunctions` object (around line 1645 in `src/main.ts`)
2. **Uncomment the line** by removing the `//` at the beginning
3. **Build and deploy** using `grunt`

**Before (Disabled)**:
```javascript
const enabledFunctions = {
  // "http.commerce.customer.address.validation.before": httpCommerceCustomerAddressValidationBeforeFn,
};
```

**After (Enabled)**:
```javascript
const enabledFunctions = {
  "http.commerce.customer.address.validation.before": httpCommerceCustomerAddressValidationBeforeFn,
};
```

### Local Development

1. **Watch mode** for continuous development:
   ```bash
   grunt watch
   # or shorthand:
   grunt w
   ```

2. **Build only** (without upload):
   ```bash
   grunt build
   ```

3. **Lint code**:
   ```bash
   npm run lint
   # or
   grunt lint
   ```

### Testing Functions

1. **Enable your function** by uncommenting it in `enabledFunctions`
2. **Build and deploy**: `grunt`
3. **Test in your tenant** by triggering the relevant action
4. **Check logs** in Dev Center for console.log outputs
5. **Iterate** by modifying code and rebuilding

### Debugging Tips

- Use `console.log()` liberally - logs appear in Dev Center
- The `context` object contains request/response data and other useful information
- Always call `callback()` to prevent timeouts
- Handle errors gracefully with try/catch blocks

## Deployment

### Build and Upload

```bash
# Full build and upload
grunt

# Build only (no upload)
grunt build

# Reset (wipe and re-upload all)
grunt reset
```

### Application Installation

1. Go to **Kibo Dev Center**
2. Navigate to your application
3. Click **"Install"** on your target tenant
4. The API Extensions will be automatically registered

## Tenant Configuration

### Enable the Application

1. In your tenant, go to **Settings > Applications**
2. Find your installed application
3. Toggle the **"Enable Application"** switch to ON

### Configure Specific Features

Depending on your API Extensions, you may need to:

- **Address Validation**: Settings > General Settings > Storefront tab > Enable Address Validation
- **Payment Processing**: Configure payment settings as needed
- **Tax Calculation**: Set up tax calculation rules
- **Shipping**: Configure shipping method integrations

### Monitoring and Logs

- **Dev Center**: View application logs and performance metrics
- **Tenant Admin**: Monitor function execution and errors
- **Console Logs**: Use `console.log()` in your functions to debug issues

---

## Available API Extension Points

This starter kit includes templates for numerous API Extension points:

### Commerce Operations
- Cart operations (add, update, delete items)
- Order processing (create, update, pricing)
- Product management (get, validate, pricing)
- Customer account management
- Address validation
- Payment processing
- Shipping calculations
- Tax estimation
- Return processing
- Fulfillment operations

### Development Notes

- All functions are **asynchronous** - use `await` for external API calls
- The `context` object contains request/response data and platform utilities
- Always call `callback()` when your function completes
- Handle errors gracefully to prevent platform issues
- Test thoroughly before deploying to production

---

## Event Sender Utility

The EventSender utility (`src/utils/eventSender.ts`) provides a robust mechanism for sending custom events from your API Extension functions to external webhook endpoints. This allows you to create event-driven integrations and notify external systems about important commerce events.

### Features

- **Automatic retry logic**: 3 attempts with configurable timeout
- **Built-in error handling**: Comprehensive error logging and graceful failure
- **Event correlation**: Automatic correlation ID tracking from API context
- **Standard payload format**: Consistent event structure across all events
- **Configuration-driven**: Webhook URL and timeout configured via application settings
- **Connection pooling**: Uses Node.js HTTPS module with connection reuse

### Configuration Setup

Before using the EventSender, you must configure your webhook endpoint in the application configuration:

```json
{
  "configuration": {
    "webhookUrl": "https://your-webhook-endpoint.com/events",
    "eventTimeout": 5000
  }
}
```

#### Configuration Properties

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `webhookUrl` | string | Yes | - | The HTTPS endpoint that will receive event payloads |
| `eventTimeout` | number | No | 3000 | Request timeout in milliseconds (max 30 seconds recommended) |

### Event Payload Structure

All events sent by EventSender follow this standardized format:

```typescript
interface IEventPayload {
  eventId: string;           // Auto-generated UUID for this event
  topic: string;             // Event type/category (e.g., "order.accepted")
  entityId: string;          // ID of the entity (e.g., order ID, product ID)
  correlationId: string;     // Request correlation ID from Kibo API context
  timestamp: string;         // ISO 8601 timestamp when event was created
  extendedProperties: Array<{key: string, value: any}>; // Custom event data
  isTest: boolean;           // Always false in this implementation
}
```

### Basic Usage

#### Import and Initialize

```typescript
import { EventSender } from "../utils/eventSender";

function myApiExtensionFunction(context: any, callback: Callback) {
  const eventSender = new EventSender(context);
  // ... rest of your function logic
}
```

#### Send a Simple Event

```typescript
// Send an event with no additional data
await eventSender.sendEvent('order.created', orderId);
```

#### Send an Event with Extended Properties

```typescript
const extendedProperties = [
  { key: 'orderNumber', value: order.orderNumber },
  { key: 'customerEmail', value: order.email },
  { key: 'totalAmount', value: order.total }
];

await eventSender.sendEvent('order.completed', order.id, extendedProperties);
```

### Real-World Examples

#### Example 1: Order Status Change Notification

```typescript
// src/functions/embedded.commerce.orders.action.before.ts
import { Callback, EmbeddedCommerceOrdersActionBeforeContext } from "../arcTypes";
import { EventSender } from "../utils/eventSender";

function embeddedCommerceOrdersActionBefore(context: EmbeddedCommerceOrdersActionBeforeContext, callback: Callback) {
  const order = context.get.order();

  if (order.status === "PendingReview") {
    const eventSender = new EventSender(context);

    const orderDetails = [
      { key: 'orderNumber', value: order.orderNumber },
      { key: 'customerEmail', value: order.email },
      { key: 'totalAmount', value: order.total },
      { key: 'previousStatus', value: order.originalCartId }
    ];

    // Send async - don't wait for completion to avoid blocking order processing
    eventSender.sendEvent('order.pending_review', order.id || "", orderDetails)
      .catch(error => console.error('Failed to send order event:', error));
  }

  callback();
}

export default embeddedCommerceOrdersActionBefore;
```

#### Example 2: Product Inventory Alert

```typescript
// src/functions/http.commerce.catalog.storefront.product.get.after.ts
import { Callback } from "../arcTypes";
import { EventSender } from "../utils/eventSender";

function httpCommerceCatalogStorefrontProductGetAfter(context: any, callback: Callback) {
  const product = context.response.body;

  if (product && product.inventoryInfo) {
    const onHandQuantity = product.inventoryInfo.onHandQuantity || 0;

    // Alert when inventory is low
    if (onHandQuantity <= 5 && onHandQuantity > 0) {
      const eventSender = new EventSender(context);

      const inventoryData = [
        { key: 'productCode', value: product.productCode },
        { key: 'currentStock', value: onHandQuantity },
        { key: 'productName', value: product.content?.productName },
        { key: 'location', value: product.inventoryInfo.locationCode }
      ];

      eventSender.sendEvent('inventory.low_stock_alert', product.productCode, inventoryData);
    }
  }

  callback();
}

export default httpCommerceCatalogStorefrontProductGetAfter;
```

#### Example 3: Customer Registration Event

```typescript
// src/functions/http.commerce.customer.accounts.add.after.ts
import { Callback } from "../arcTypes";
import { EventSender } from "../utils/eventSender";

function httpCommerceCustomerAccountsAddAfter(context: any, callback: Callback) {
  const customer = context.response.body;

  if (context.response.statusCode < 300 && customer) {
    const eventSender = new EventSender(context);

    const customerData = [
      { key: 'email', value: customer.emailAddress },
      { key: 'firstName', value: customer.firstName },
      { key: 'lastName', value: customer.lastName },
      { key: 'customerType', value: customer.customerType || 'B2C' },
      { key: 'registrationSource', value: 'storefront' }
    ];

    eventSender.sendEvent('customer.registered', customer.id.toString(), customerData);
  }

  callback();
}

export default httpCommerceCustomerAccountsAddAfter;
```

### Error Handling and Retry Logic

The EventSender automatically handles errors and retries:

1. **Automatic Retries**: Up to 3 attempts per event
2. **Timeout Handling**: Configurable request timeout (default 3 seconds)
3. **Error Logging**: Detailed console logs for debugging
4. **Non-blocking**: Event failures don't interrupt main API Extension logic

#### Error Scenarios Handled

- Network timeouts
- HTTP error responses (4xx, 5xx)
- Invalid webhook URLs
- JSON serialization errors
- Connection failures

#### Monitoring Event Delivery

Check the application logs in Kibo Dev Center for event delivery status:

```
Attempting event 1/3 for topic 'order.accepted' to URL: https://your-webhook.com/events....
Attempt 1 - SUCCESS

EVENT PAYLOAD
--------------
{
  "eventId": "123e4567-e89b-12d3-a456-426614174000",
  "topic": "order.accepted",
  "entityId": "12345",
  "correlationId": "abc-def-ghi",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "extendedProperties": [
    { "key": "orderNumber", "value": "ORD-001" }
  ],
  "isTest": false
}
```

### Best Practices

#### 1. Event Naming Conventions
Use clear, hierarchical topic names:
- `order.created`, `order.updated`, `order.cancelled`
- `customer.registered`, `customer.updated`
- `inventory.low_stock`, `inventory.out_of_stock`
- `payment.authorized`, `payment.captured`, `payment.failed`

#### 2. Extended Properties
Include relevant context for downstream systems:
```typescript
const extendedProperties = [
  { key: 'entityType', value: 'order' },
  { key: 'tenantId', value: context.tenantId },
  { key: 'siteId', value: context.siteId },
  { key: 'source', value: 'kibo_api_extension' }
];
```

#### 3. Async Event Sending
For non-critical events, send asynchronously to avoid blocking:
```typescript
// Don't wait for event completion
eventSender.sendEvent(topic, entityId, properties)
  .catch(error => console.error('Event failed:', error));

callback(); // Continue with main logic
```

#### 4. Configuration Management
Store webhook URLs per environment in your configuration:
```json
{
  "configuration": {
    "webhookUrl": "https://prod-webhooks.yourcompany.com/kibo-events",
    "eventTimeout": 5000
  }
}
```

### Webhook Endpoint Requirements

Your webhook endpoint should:

1. **Accept POST requests** with `application/json` content type
2. **Respond with 2xx status** codes for successful processing
3. **Handle idempotency** using the `eventId` field
4. **Process timeouts gracefully** (EventSender will retry)
5. **Validate payload structure** before processing

#### Example Webhook Handler (Node.js/Express)

```typescript
app.post('/kibo-events', (req, res) => {
  const event = req.body;

  // Validate required fields
  if (!event.eventId || !event.topic || !event.entityId) {
    return res.status(400).json({ error: 'Invalid event payload' });
  }

  // Process the event
  try {
    processKiboEvent(event);
    res.status(200).json({ received: true, eventId: event.eventId });
  } catch (error) {
    console.error('Event processing failed:', error);
    res.status(500).json({ error: 'Processing failed' });
  }
});
```

### Troubleshooting

#### Common Issues

1. **Events not sending**: Check that `webhookUrl` is configured in application settings
2. **Timeout errors**: Increase `eventTimeout` value or optimize webhook response time
3. **JSON errors**: Ensure `extendedProperties` contain serializable values only
4. **Authentication**: EventSender doesn't include authentication headers - handle this in your webhook endpoint

#### Debug Logging

Enable verbose logging by checking Dev Center application logs. All event attempts and payloads are logged automatically.

