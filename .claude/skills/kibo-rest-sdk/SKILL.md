---
name: kibo-rest-sdk
description: >
  Use the @kibocommerce/rest-sdk TypeScript SDK to call Kibo Commerce REST APIs.
  Covers configuration (explicit + env + Kibo-hosted), locating the right API client
  out of 24 domains, making calls, OAuth/auth handling, middleware, and error handling.
  Use when writing code that talks to Kibo Commerce APIs, importing from
  '@kibocommerce/rest-sdk', or when the user mentions Kibo tenant/site/catalog,
  ProductSearchApi, OrderApi, InventoryApi, Configuration.fromEnv(), etc.
---

# Kibo Commerce REST SDK

TypeScript SDK wrapping Kibo Commerce REST APIs. Pattern: build a `Configuration`, pass to a domain `Api` client, call operation methods returning Promises.

## Install

```bash
npm install @kibocommerce/rest-sdk
```

Requires Node 18+ (uses native `fetch`).

## 1. Configuration

Three ways to build config. Pick by deploy target.

**Explicit params:**
```typescript
import { Configuration } from '@kibocommerce/rest-sdk'

const configuration = new Configuration({
  tenantId: 26507,
  siteId: 41315,
  catalog: 1,
  masterCatalog: 1,
  sharedSecret: '12345_Secret',
  clientId: 'KIBO_APP.1.0.0.Release',
  pciHost: 'pmts.mozu.com',
  authHost: 'home.mozu.com',
  apiEnv: 'sandbox',
})
```

**From env** (you must load env yourself, e.g. `dotenv`):
```typescript
import 'dotenv/config'
import { Configuration } from '@kibocommerce/rest-sdk'

const configuration = Configuration.fromEnv()
```
Env vars: `KIBO_TENANT KIBO_SITE KIBO_MASTER_CATALOG KIBO_CATALOG KIBO_CURRENCY KIBO_LOCALE KIBO_AUTH_HOST KIBO_CLIENT_ID KIBO_SHARED_SECRET KIBO_API_ENV`.

**Kibo-hosted** (Arc.js / running inside Kibo): SDK auto-detects the hosted env (via `process.env.mozuHosted`) and reads core config — tenant, site, catalog, hosts — from `mozuHosted.sdkConfig`. No secrets or tenant/site params needed.

```typescript
import { Configuration } from '@kibocommerce/rest-sdk'

// no per-request user context:
const configuration = new Configuration({})

// with per-request user context (userClaims, purchaseLocation, priceListCode, pricePlanCode):
const configuration = new Configuration({ apiContext: context })
```

The constructor always takes `ConfigurationParameters` and reads `params.apiContext` for the hosted context — so the context must be passed under the `apiContext` key, NOT as the bare argument. `new Configuration(context)` silently drops it (`context.apiContext` is undefined). Pass `{}` if you have no user context.

Auth is automatic: when `sharedSecret` + `clientId` + `authHost` present, SDK manages OAuth tickets via `@kibocommerce/sdk-authentication` with an in-memory cache. No manual token fetching. To override, set `accessToken` on config.

## 2. Locate the API client

Clients map to domains in the [Kibo API docs](https://apidocs.kibocommerce.com/). Import from `@kibocommerce/rest-sdk/clients/<Domain>`. The 24 domains:

`AdminUser AppDevelopment CatalogAdministration CatalogStorefront Commerce Content Customer Entities Event Fulfillment ImportExport Inventory LocationAdmin LocationStorefront OrderRouting PricingStorefront Reference Reservation Settings ShippingAdmin ShippingStorefront SolrSchemaManager Subscription Tenant`

Common ones:
- **CatalogStorefront** → `ProductSearchApi`, `ProductsApi`, `CategoriesApi`, `PriceListsApi`
- **Commerce** → `CartApi`, `CheckoutApi`, `OrderApi`, `ReturnApi`, `WishlistApi`, `QuoteApi`
- **Customer** → `CustomerAccountApi`, `B2BAccountApi`, `StorefrontAuthTicketApi`
- **Inventory** → `InventoryApi`, `InventoryAllocationApi`, `InventoryBinApi`
- **Fulfillment** → `FulfillmentApi`, `ShipmentApi`, `PickWaveApi`

If unsure which client has a method, grep the SDK: `node_modules/@kibocommerce/rest-sdk/clients/<Domain>/apis/`.

## 3. Make a call

```typescript
import { ProductSearchApi } from '@kibocommerce/rest-sdk/clients/CatalogStorefront'

const client = new ProductSearchApi(configuration)
const response = await client.storefrontSearch({ query: 'shoes' })
```

Key conventions:
- Every operation takes a single `requestParameters` object (named per-operation, e.g. `StorefrontSearchRequest`). Optional for no-arg operations.
- `client.foo(...)` returns the parsed body. `client.fooRaw(...)` returns `ApiResponse<T>` with the raw `Response` — use Raw when you need status/headers.
- Optional 2nd arg `initOverrides` (a `RequestInit` or function) overrides per-call fetch options.

## 4. Middleware

Hooks running pre/post/onError around each request. Implement `Middleware`:

```typescript
import { Middleware, RequestContext, ResponseContext, FetchParams, ErrorContext }
  from '@kibocommerce/rest-sdk/types'

export class LoggerMiddleware implements Middleware {
  async pre(ctx: RequestContext): Promise<FetchParams | void> {
    console.log(`${ctx.init.method} ${ctx.url}`)
  }
  async post(ctx: ResponseContext): Promise<Response | void> {
    console.log(`status ${ctx.response.status}`)
  }
  async onError(ctx: ErrorContext): Promise<Response | void> {
    console.error('error', ctx.error)
  }
}
```

Attach via config `middleware: [new LoggerMiddleware()]`, or after construction `client.withMiddleware([...])`.

## 5. Errors

Non-2xx responses throw. Catch and inspect:
```typescript
import { ResponseError } from '@kibocommerce/rest-sdk/client-runtime'

try {
  await client.storefrontSearch({ query: 'shoes' })
} catch (e) {
  if (e instanceof ResponseError) {
    console.error(e.response.status, await e.response.text())
  } else throw e
}
```

## Gotchas

- Don't import everything from the root — only `Configuration` exports from `@kibocommerce/rest-sdk`. API clients come from `/clients/<Domain>`, types from `/types`.
- Node < 18 has no global `fetch`; pass a `fetchApi` polyfill in config params.
- Reuse one `Configuration` across clients — it holds the shared auth-ticket cache.
- `tenantId`/`siteId`/`catalog` accept `string` or `number`.
