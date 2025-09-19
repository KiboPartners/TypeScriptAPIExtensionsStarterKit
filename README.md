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

