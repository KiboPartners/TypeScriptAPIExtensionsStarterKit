# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Kibo Commerce API Extensions starter kit built with TypeScript. It provides a framework for creating custom business logic that hooks into various Kibo Commerce platform events (cart operations, orders, payments, fulfillment, etc.).

## Build and Development Commands

```bash
# Build and upload to Kibo platform
grunt                    # Full build + upload (default task)
grunt build             # Build only (no upload)
grunt reset             # Wipe all remote files and re-upload

# Development
grunt watch             # Watch mode - auto build/upload on changes
grunt w                 # Shorthand for watch
grunt c                 # Alternative shorthand for watch

# Code quality
npm run lint            # Run ESLint with auto-fix
grunt lint              # ESLint via Grunt
npm run prettier:format # Format code with Prettier

# Tests (Jest + ts-jest)
npm test                # Run all unit tests in tests/
npx jest --watch        # Watch mode
```

## Core Architecture

### Extension Registration Flow

The project uses a three-stage architecture for registering API Extensions:

1. **Function Implementation** (`src/functions/*.ts`): Individual TypeScript files containing the business logic
2. **Function Registration** (`src/main.ts`): Wraps each function with `createArcFunction()` and error handling
3. **Function Enablement** (`src/main.ts`): The `enabledFunctions` object controls which extensions are active

### Key Architecture Files

**`src/main.ts`** - The registration hub:
- Imports all function implementations from `src/functions/index.ts`
- Creates wrapped versions using `createArcFunction()` helper
- Maintains the `enabledFunctions` object that acts as a registry
- Only functions in `enabledFunctions` (uncommented) are active

**`src/arcTypes/index.ts`** - Type definitions:
- `ActionId` enum: Defines all available API Extension points
- `Callback` type: Standard callback signature for all functions
- Context interfaces: Typed contexts for each extension point (e.g., `EmbeddedCommerceCartsGetAfterContext`)
- `createArcFunction()`: Helper to create properly formatted extension functions

**`src/platformInstall.ts`** - Installation logic:
- Automatically registers enabled functions when the app is installed on a tenant
- Reads the `enabledFunctions` object to determine what to register
- Updates the Kibo platform's Arc configuration

**`src/functions/index.ts`** - Barrel export file:
- Imports and re-exports all function implementations
- Used by `main.ts` to access all functions

### Function Naming Convention

Files follow: `{type}.{namespace}.{resource}.{operation}.{timing}.ts`

Examples:
- `embedded.commerce.carts.get.after.ts`
- `http.commerce.customer.address.validation.before.ts`
- `embedded.commerce.payments.action.performPaymentInteraction.ts`

**Types:**
- `http.*` - HTTP API extensions (REST API calls)
- `embedded.*` - Embedded extensions (internal platform operations)

### Context Objects

Each extension type has a specific context interface with two main sections:

**`exec`** - Methods to modify data:
```typescript
context.exec.setData(key, value)          // Set custom data
context.exec.setAttribute(fqn, values)     // Set attributes
context.exec.setItemAllocation(...)        // Set inventory allocation
```

**`get`** - Methods to retrieve data:
```typescript
context.get.cart()       // Get cart object
context.get.order()      // Get order object
context.get.payment()    // Get payment object
```

**`apiContext`** - Platform metadata (all contexts):
```typescript
context.apiContext.tenantId
context.apiContext.siteId
context.apiContext.correlationId
context.apiContext.baseUrl
```

**`configuration`** - Application settings (all contexts):
```typescript
context.configuration.webhookUrl
context.configuration.hashKey
// Any custom config defined in mozu.config.json
```

## Enabling/Disabling Extensions

Extensions are controlled through the `enabledFunctions` object in `src/main.ts` (around line 2023).

**To enable an extension:**
1. Find the commented line in `enabledFunctions`
2. Remove the `//` prefix
3. Run `grunt` to build and upload

**Example:**
```typescript
// Disabled:
// "embedded.commerce.payments.action.before": embeddedCommercePaymentsActionBeforeFn,

// Enabled:
"embedded.commerce.payments.action.before": embeddedCommercePaymentsActionBeforeFn,
```

**Important:** Extensions must exist in three places to work:
1. Implementation file in `src/functions/`
2. Export in `src/functions/index.ts`
3. Registration in `src/main.ts` (created with `createArcFunction()`)
4. Entry in `enabledFunctions` object (uncommented)

## Adding New Extensions

### Step 1: Create the function file

```typescript
// src/functions/embedded.commerce.example.action.before.ts
import { Callback, EmbeddedCommerceExampleContext } from "../arcTypes";

function embeddedCommerceExampleActionBefore(
  context: EmbeddedCommerceExampleContext,
  callback: Callback
) {
  console.log("Extension triggered", context.apiContext.correlationId);

  // Your logic here
  const data = context.get.example();
  context.exec.setData("customField", "value");

  callback(); // CRITICAL: Always call callback()
}

export default embeddedCommerceExampleActionBefore;
```

### Step 2: Add to index.ts exports

```typescript
// src/functions/index.ts
import embeddedCommerceExampleActionBefore from "./embedded.commerce.example.action.before";

export {
  // ... existing exports
  embeddedCommerceExampleActionBefore,
};
```

### Step 3: Register in main.ts

Add the registration (before `enabledFunctions` object):

```typescript
// src/main.ts
const embeddedCommerceExampleActionBeforeFn = createArcFunction(
  ActionId["embedded.commerce.example.action.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceExampleActionBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);
```

### Step 4: Add to enabledFunctions

```typescript
const enabledFunctions = {
  // ... other functions
  "embedded.commerce.example.action.before": embeddedCommerceExampleActionBeforeFn,
};
```

### Step 5: Add ActionId (if new)

If the ActionId doesn't exist in the enum:

```typescript
// src/arcTypes/index.ts
export enum ActionId {
  // ... existing actions
  "embedded.commerce.example.action.before",
}
```

## Configuration

### mozu.config.json

This file (not committed to git) contains environment-specific settings:

```json
{
  "email": "your-dev-email@example.com",
  "developerAccountId": 12345,
  "applicationKey": "your_app_key.1.0.0.Release",
  "workingApplicationKey": "your_app_key.1.0.0.Release",
  "baseUrl": "https://home.mozu.com"
}
```

### Application Configuration

Custom configuration can be accessed in extensions via `context.configuration`:

```typescript
const webhookUrl = context.configuration.webhookUrl;
const timeout = context.configuration.eventTimeout || 3000;
```

## Important Patterns

### Always Call callback()

Every extension function MUST call `callback()` when complete. The try/finally pattern in main.ts ensures this, but be aware:

```typescript
function myExtension(context: any, callback: Callback) {
  // Do work...

  callback(); // REQUIRED - or the request will timeout
}
```

### Async Operations

For async operations, use async/await:

```typescript
async function myExtension(context: any, callback: Callback) {
  try {
    const result = await fetch("https://api.example.com");
    context.exec.setData("result", result);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    callback();
  }
}
```

### Error Handling

The main.ts wrapper provides error handling, but add specific handling in your function:

```typescript
function myExtension(context: any, callback: Callback) {
  try {
    // Risky operation
    const data = JSON.parse(context.request.body.data);
    context.exec.setData("parsed", data);
  } catch (e) {
    console.error("Parse error:", e);
    // Don't throw - just log and continue
  }
  callback();
}
```

### Accessing the Kibo SDK

The project includes `@kibocommerce/rest-sdk` for making API calls. The SDK can be initialized by simply passing the context:

```typescript
import { Configuration } from "@kibocommerce/rest-sdk";
import { OrderApi } from "@kibocommerce/rest-sdk/clients/Commerce";

async function myExtension(context: any, callback: Callback) {
  // Simple SDK initialization - just pass the context
  const config = new Configuration(context);
  const orderApi = new OrderApi(config);

  // Use the API client
  const order = await orderApi.getOrder({ orderId: "123" });

  callback();
}
```

**Available API Clients:**
- `@kibocommerce/rest-sdk/clients/Commerce` - OrderApi, PaymentApi, CartApi, etc.
- `@kibocommerce/rest-sdk/clients/Catalog` - ProductApi, CategoryApi, etc.
- `@kibocommerce/rest-sdk/clients/Customer` - CustomerAccountApi, etc.
- `@kibocommerce/rest-sdk/clients/Commerce/models` - Type definitions (Order, Payment, etc.)

**Example: Creating a payment**
```typescript
import { Configuration } from "@kibocommerce/rest-sdk";
import { PaymentApi } from "@kibocommerce/rest-sdk/clients/Commerce";
import { Payment } from "@kibocommerce/rest-sdk/clients/Commerce/models";

async function myExtension(context: any, callback: Callback) {
  const config = new Configuration(context);
  const paymentApi = new PaymentApi(config);

  const payment: Payment = {
    amount: 100.00,
    paymentType: "CreditCard",
    billingInfo: { /* ... */ }
  };

  const created = await paymentApi.createPayment({
    orderId: "12345",
    payment: payment
  });

  callback();
}
```

## Event Sender Utility

Located in `src/utils/eventSender.ts`, this utility sends events to external webhooks with:
- Automatic retry (3 attempts)
- Error handling and logging
- Standard payload format
- Correlation ID tracking

**Usage:**
```typescript
import { EventSender } from "../utils/eventSender";

function myExtension(context: any, callback: Callback) {
  const eventSender = new EventSender(context);

  const properties = [
    { key: "orderId", value: order.id },
    { key: "total", value: order.total }
  ];

  // Non-blocking send
  eventSender.sendEvent("order.created", order.id, properties)
    .catch(err => console.error("Event failed:", err));

  callback();
}
```

**Configuration required in mozu.config.json:**
```json
{
  "configuration": {
    "webhookUrl": "https://your-endpoint.com/events",
    "eventTimeout": 5000,
    "hashKey": "your-secret-key"
  }
}
```

## Debugging

### Logging

All `console.log()` output appears in Kibo Dev Center:
- Navigate to your application in Dev Center
- View application logs
- Filter by correlation ID for specific requests

### Common Issues

**Extension not firing:**
- Check it's uncommented in `enabledFunctions`
- Verify `grunt` ran successfully
- Confirm application is enabled in tenant settings

**Timeout errors:**
- Ensure `callback()` is called in all code paths
- Check for uncaught async operations
- Review error logs in Dev Center

**Data not persisting:**
- Verify you're using `context.exec` methods correctly
- Check that you're calling them before `callback()`
- Review that the context type matches the extension point

## Testing

### Unit Tests (Jest + ts-jest)

Functions are unit tested with Jest. Tests live in the top-level `tests/` folder and import the real TypeScript source directly (e.g. `import fn from "../src/functions/..."`).

```bash
npm test                 # run all unit tests (jest)
npx jest <name>          # run a single suite by name fragment
npx jest --watch         # watch mode
```

**Conventions:**
- Test files are named `*.test.ts` and live in `tests/`.
- `tests/` is **excluded from the build**: it is not under `src/**` (so Grunt never compiles or uploads it), and it is listed in `tsconfig.json` `exclude`. A separate `tests/tsconfig.json` adds the `jest`/`node` types for the editor and is used by `tsc --noEmit -p tests/tsconfig.json` to typecheck tests.
- Jest config is `jest.config.js` (`preset: ts-jest`, `roots: ["<rootDir>/tests"]`, `testMatch: ["**/*.test.ts"]`).
- Most functions are synchronous over their `callback` (async with no `await`), so a test can invoke the function and assert against the mutated `context` and any error argument passed to `callback`.
- **The `Callback` type is `(errorMessage?: string) => void`** — functions report failure by passing a **string** to `callback`, not an `Error` object. Tests should assert on the string message.

Example:

```typescript
import myFn from "../src/functions/embedded.commerce.example.action.before";

it("reports an error when input is invalid", () => {
  const context: any = { request: { body: {} }, response: { body: {} } };
  let error: string | undefined;
  myFn(context, (e?: string) => { error = e; });

  expect(typeof error).toBe("string");
});
```

### Tenant Testing

After making changes:
1. Build and upload: `grunt`
2. Trigger the relevant action in your tenant
3. Check Dev Center logs for output
4. Verify expected behavior

For watch mode during development:
```bash
grunt watch  # Auto-rebuild on file changes
```

## Deployment

### To Development Environment
```bash
grunt  # Builds and uploads to configured app
```
