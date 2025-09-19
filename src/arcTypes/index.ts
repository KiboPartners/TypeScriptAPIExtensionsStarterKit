import { Configuration } from "@kibocommerce/rest-sdk";

/**
 * Modify this list if you need more actions
 */
export enum ActionId {
  "embedded.commerce.carts.get.after",
  "embedded.commerce.carts.addItem.before",
  "embedded.commerce.carts.addItem.after",
  "embedded.commerce.carts.updateItem.before",
  "embedded.commerce.carts.updateItem.after",
  "embedded.commerce.carts.deleteItem.before",
  "embedded.commerce.carts.deleteItem.after",
  "embedded.commerce.carts.deleteCart.before",
  "embedded.commerce.carts.deleteCart.after",
  "http.commerce.catalog.admin.products.updateProduct.before",
  "http.commerce.catalog.admin.products.updateProduct.after",
  "http.commerce.catalog.admin.categories.addCategory.before",
  "http.commerce.catalog.admin.categories.addCategory.after",
  "http.commerce.catalog.admin.categories.updateCategory.before",
  "http.commerce.catalog.admin.categories.updateCategory.after",
  "http.commerce.catalog.storefront.pricing.priceProduct.before",
  "http.commerce.catalog.storefront.pricing.priceProduct.after",
  "http.commerce.catalog.storefront.pricing.priceProducts.before",
  "http.commerce.catalog.storefront.pricing.priceProducts.after",
  "http.commerce.catalog.storefront.pricing.priceOrder.before",
  "http.commerce.catalog.storefront.pricing.priceOrder.after",
  "http.commerce.catalog.storefront.pricing.repriceOrder.before",
  "http.commerce.catalog.storefront.pricing.repriceOrder.after",
  "http.commerce.catalog.storefront.products.getProduct.before",
  "http.commerce.catalog.storefront.products.getProduct.after",
  "http.commerce.catalog.storefront.products.getProductForIndexing.before",
  "http.commerce.catalog.storefront.products.getProductForIndexing.after",
  "http.commerce.catalog.storefront.products.getProducts.before",
  "http.commerce.catalog.storefront.products.getProducts.after",
  "http.commerce.catalog.storefront.productsearch.search.before",
  "http.commerce.catalog.storefront.productsearch.search.after",
  "http.commerce.catalog.storefront.products.locationinventories.before",
  "http.commerce.catalog.storefront.products.locationinventories.after",
  "embedded.commerce.catalog.storefront.products.getPriceListHierachy",
  "http.commerce.catalog.storefront.products.configuredProduct.before",
  "http.commerce.catalog.storefront.products.configuredProduct.after",
  "http.commerce.catalog.storefront.products.validateProduct.before",
  "http.commerce.catalog.storefront.products.validateProduct.after",
  "http.commerce.catalog.storefront.products.resolvePriceList.before",
  "http.commerce.catalog.storefront.products.resolvePriceList.after",
  "http.commerce.catalog.storefront.shipping.requestRates.before",
  "http.commerce.catalog.storefront.shipping.requestRates.after",
  "http.commerce.catalog.storefront.shipping.requestMultiRates.before",
  "http.commerce.catalog.storefront.shipping.requestMultiRates.after",
  "http.commerce.catalog.storefront.tax.estimateTaxes.before",
  "http.commerce.catalog.storefront.tax.estimateTaxes.after",
  "embedded.commerce.checkouts.price.before",
  "http.commerce.customer.accounts.addAccount.before",
  "http.commerce.customer.accounts.addAccount.after",
  "http.commerce.customer.accounts.addAccountAndLogin.before",
  "http.commerce.customer.accounts.addAccountAndLogin.after",
  "http.commerce.customer.address.validation.before",
  "http.commerce.customer.address.validation.after",
  "http.commerce.customer.accounts.updateAccount.before",
  "http.commerce.customer.accounts.updateAccount.after",
  "http.commerce.customer.accounts.changePassword.before",
  "http.commerce.customer.accounts.changePassword.after",
  "http.commerce.customer.accounts.updateForgottenPassword.before",
  "http.commerce.customer.accounts.updateForgottenPassword.after",
  "http.commerce.customer.authTickets.createUserAuthTicket.after",
  "http.commerce.customer.authTickets.createUserAuthTicket.before",
  "embedded.commerce.customer.accounts.verifyExternalPassword",
  "http.commerce.customer.credits.getCredits.before",
  "http.commerce.customer.credits.getCredits.after",
  "http.commerce.customer.credits.getCredit.before",
  "http.commerce.customer.credits.getCredit.after",
  "http.commerce.customer.credits.addCredit.before",
  "http.commerce.customer.credits.addCredit.after",
  "http.commerce.customer.credits.updateCredit.before",
  "http.commerce.customer.credits.updateCredit.after",
  "http.commerce.customer.credits.associateCreditToShopper.before",
  "http.commerce.customer.credits.associateCreditToShopper.after",
  "http.commerce.customer.credits.deleteCredit.before",
  "http.commerce.customer.credits.resendCreditCreatedEmail.before",
  "http.commerce.customer.credits.getTransactions.before",
  "http.commerce.customer.credits.getTransactions.after",
  "http.commerce.customer.credits.addTransaction.before",
  "http.commerce.customer.credits.addTransaction.after",
  "http.commerce.customer.credits.getAuditEntries.before",
  "http.commerce.customer.credits.getAuditEntries.after",
  "http.commerce.fulfillment.createShipments.before",
  "embedded.commerce.orders.addItem.before",
  "embedded.commerce.orders.addItem.after",
  "embedded.commerce.orders.price.before",
  "embedded.commerce.orders.price.after",
  "embedded.commerce.orders.deleteItem.before",
  "embedded.commerce.orders.deleteItem.after",
  "embedded.commerce.orders.action.before",
  "embedded.commerce.orders.action.after",
  "embedded.commerce.orders.createFromCart.before",
  "embedded.commerce.orders.createFromCart.after",
  "http.commerce.orders.setFulFillmentInfo.before",
  "http.commerce.orders.setFulFillmentInfo.after",
  "http.commerce.orders.setBillingInfo.before",
  "http.commerce.orders.setBillingInfo.after",
  "http.commerce.orders.addItem.before",
  "http.commerce.orders.addItem.after",
  "embedded.commerce.payments.action.performPaymentInteraction",
  "embedded.commerce.payments.action.before",
  "embedded.commerce.payments.action.after",
  "embedded.commerce.return.retrieveReasons",
  "http.commerce.returns.updateReturn.before",
  "http.commerce.returns.updateReturn.after",
  "http.commerce.returns.deleteReturn.before",
  "http.commerce.returns.deleteReturn.after",
  "http.commerce.returns.createReturnItem.before",
  "http.commerce.returns.createReturnItem.after",
  "http.commerce.returns.deleteOrderItem.before",
  "http.commerce.returns.deleteOrderItem.after",
  "http.commerce.returns.createPackage.before",
  "http.commerce.returns.createPackage.after",
  "http.commerce.returns.updatePackage.before",
  "http.commerce.returns.updatePackage.after",
  "http.commerce.returns.deletePackage.before",
  "http.commerce.returns.deletePackage.after",
  "http.commerce.returns.createPackageShipments.before",
  "http.commerce.returns.createPackageShipments.after",
  "http.commerce.returns.deleteShipment.before",
  "http.commerce.returns.deleteShipment.after",
  "embedded.commerce.return.GetRmaLabels.before",
  "embedded.commerce.return.GetRmaLabels.after",
  "embedded.commerce.return.actions.before",
  "embedded.commerce.return.actions.after",
  "http.commerce.routing.candidates.before",
  "http.commerce.routing.candidates.after",
  "http.commerce.settings.checkout.paymentsettings.updatePaymentSettings.before",
  "embedded.platform.applications.install",
  "embedded.platform.applications.uninstall"
}

export interface HttpContext extends BaseContext{
  request: {
    body: any
  },
  response: {
    body: any
  }
}

//TODO: add secureAppdata
export interface BaseContext {
  configuration: ExtensionConfiguration
  apiContext: ApiContext
}
export interface ExtensionConfiguration {
  [key:string]: any
}

export type ApiContext = {
  baseUrl: string;
  basePciUrl: string;
  tenantPod: string;
  appClaims?: string;
  appKey?: string;
  tenantId: number;
  siteId: number;
  masterCatalogId: number;
  catalogId: number;
  currencyCode: string;
  previewDate: Date;
  localeCode: string;
  correlationId?: string;
  isAuthorizedAsAdmin?: boolean;
  userClaims?: string;
};

export interface ArcFunction {
  actionName: string;
  customFunction: (
    context: any,
    callback: (errorMessage?: string) => void
  ) => void;
}

export type Callback  = (errorMessage?: string) => void

export function createArcFunction(
  actionName: ActionId,
  customFunction: (
    context: any,
    callback: (errorMessage?: string) => void
  ) => void
): ArcFunction {
  return { actionName: ActionId[actionName], customFunction: customFunction };
}


export interface BaseEmbeddedContext extends BaseContext{
  exec: any;
  get: any;
}

// Cart Action Contexts
export interface EmbeddedCommerceCartsGetAfterContext extends BaseContext {
  exec: {
    setData(key: string, value: any): any;
    removeData(key: string): any;
    setItemData(key: string, value: any, itemId: string): any;
    removeItemData(key: string, itemId: string): any;
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId: string): any;
    removeItem(itemId: string): any;
  };
  get: {
    cart(): any;
  };
}

export interface EmbeddedCommerceCartsAddItemBeforeContext extends BaseContext {
  exec: {
    setData(key: string, value: any): any;
    removeData(key: string): any;
    setItemData(key: string, value: any, itemId?: string): any;
    removeItemData(key: string, itemId?: string): any;
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId?: string): any;
    removeItem(itemId: string): any;
  };
  get: {
    cart(): any;
    cartItem(): any;
  };
}

export interface EmbeddedCommerceCartsAddItemAfterContext extends BaseContext {
  exec: {
    setData(key: string, value: any): any;
    removeData(key: string): any;
    setItemData(key: string, value: any, itemId?: string): any;
    removeItemData(key: string, itemId?: string): any;
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId?: string): any;
    removeItem(itemId: string): any;
  };
  get: {
    cart(): any;
    cartItem(): any;
  };
}

export interface EmbeddedCommerceCartsUpdateItemBeforeContext extends BaseContext {
  exec: {
    setData(key: string, value: any): any;
    removeData(key: string): any;
    setItemData(key: string, value: any, itemId?: string): any;
    removeItemData(key: string, itemId?: string): any;
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId?: string): any;
    removeItem(itemId: string): any;
  };
  get: {
    cart(): any;
    cartItem(): any;
  };
}

export interface EmbeddedCommerceCartsUpdateItemAfterContext extends BaseContext {
  exec: {
    setData(key: string, value: any): any;
    removeData(key: string): any;
    setItemData(key: string, value: any, itemId?: string): any;
    removeItemData(key: string, itemId?: string): any;
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId?: string): any;
    removeItem(itemId: string): any;
  };
  get: {
    cart(): any;
    cartItem(): any;
  };
}

export interface EmbeddedCommerceCartsDeleteItemBeforeContext extends BaseContext {
  exec: {
    setData(key: string, value: any): any;
    removeData(key: string): any;
    setItemData(key: string, value: any, itemId?: string): any;
    removeItemData(key: string, itemId?: string): any;
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId?: string): any;
    removeItem(itemId: string): any;
  };
  get: {
    cart(): any;
    cartItem(): any;
  };
}

export interface EmbeddedCommerceCartsDeleteItemAfterContext extends BaseContext {
  exec: {
    setData(key: string, value: any): any;
    removeData(key: string): any;
    setItemData(key: string, value: any, itemId?: string): any;
    removeItemData(key: string, itemId?: string): any;
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId?: string): any;
    removeItem(itemId: string): any;
  };
  get: {
    cart(): any;
    cartItem(): any;
  };
}

export interface EmbeddedCommerceCartsDeleteCartBeforeContext extends BaseContext {
  exec: {
    setData(key: string, value: any): any;
    removeData(key: string): any;
    setItemData(key: string, value: any, itemId: string): any;
    removeItemData(key: string, itemId: string): any;
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId: string): any;
    removeItem(itemId: string): any;
  };
  get: {
    cart(): any;
  };
}

export interface EmbeddedCommerceCartsDeleteCartAfterContext extends BaseContext {
  exec: {
    setData(key: string, value: any): any;
    removeData(key: string): any;
    setItemData(key: string, value: any, itemId: string): any;
    removeItemData(key: string, itemId: string): any;
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId: string): any;
    removeItem(itemId: string): any;
  };
  get: {
    cart(): any;
  };
}

// Order Action Contexts
export interface EmbeddedCommerceOrdersAddItemBeforeContext extends BaseContext {
  exec: {
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId?: string): any;
    setAttribute(fqn: string, values: any): any;
    removeAttribute(fqn: string): any;
    setData(key: string, value: any): any;
    removeData(key: string): any;
    setItemData(key: string, value: any, itemId?: string): any;
    removeItemData(key: string, itemId?: string): any;
    setDutyAmount(dutyAmount: number): any;
    setItemDutyAmount(dutyAmount: number, itemId?: string): any;
  };
  get: {
    order(): any;
    orderItem(): any;
  };
}

export interface EmbeddedCommerceOrdersAddItemAfterContext extends BaseContext {
  exec: {
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId?: string): any;
    setAttribute(fqn: string, values: any): any;
    removeAttribute(fqn: string): any;
    setData(key: string, value: any): any;
    removeData(key: string): any;
    setItemData(key: string, value: any, itemId?: string): any;
    removeItemData(key: string, itemId?: string): any;
    setDutyAmount(dutyAmount: number): any;
    setItemDutyAmount(dutyAmount: number, itemId?: string): any;
  };
  get: {
    order(): any;
    orderItem(): any;
  };
}

export interface EmbeddedCommerceOrdersPriceBeforeContext extends BaseContext {
  exec: {
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId: string): any;
    setAttribute(fqn: string, values: any): any;
    removeAttribute(fqn: string): any;
    setData(key: string, value: any): any;
    removeData(key: string): any;
    setItemData(key: string, value: any, itemId: string): any;
    removeItemData(key: string, itemId: string): any;
    setDutyAmount(dutyAmount: number): any;
    setHandlingAmount(handlingAmount: number): any;
    setItemHandlingAmount(handlingAmount: number, itemId: string): any;
  };
  get: {
    order(): any;
  };
}

export interface EmbeddedCommerceOrdersPriceAfterContext extends BaseContext {
  exec: {
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId: string): any;
    setAttribute(fqn: string, values: any): any;
    removeAttribute(fqn: string): any;
    setData(key: string, value: any): any;
    removeData(key: string): any;
    setItemData(key: string, value: any, itemId: string): any;
    removeItemData(key: string, itemId: string): any;
    setDutyAmount(dutyAmount: number): any;
  };
  get: {
    order(): any;
  };
}

export interface EmbeddedCommerceOrdersDeleteItemBeforeContext extends BaseContext {
  exec: {
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId?: string): any;
    setAttribute(fqn: string, values: any): any;
    removeAttribute(fqn: string): any;
    setData(key: string, value: any): any;
    removeData(key: string): any;
    setItemData(key: string, value: any, itemId?: string): any;
    removeItemData(key: string, itemId?: string): any;
    setDutyAmount(dutyAmount: number): any;
    setItemDutyAmount(dutyAmount: number, itemId?: string): any;
  };
  get: {
    order(): any;
    orderItem(): any;
  };
}

export interface EmbeddedCommerceOrdersDeleteItemAfterContext extends BaseContext {
  exec: {
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId?: string): any;
    setAttribute(fqn: string, values: any): any;
    removeAttribute(fqn: string): any;
    setData(key: string, value: any): any;
    removeData(key: string): any;
    setItemData(key: string, value: any, itemId?: string): any;
    removeItemData(key: string, itemId?: string): any;
    setDutyAmount(dutyAmount: number): any;
    setItemDutyAmount(dutyAmount: number, itemId?: string): any;
  };
  get: {
    order(): any;
    orderItem(): any;
  };
}

export interface EmbeddedCommerceOrdersActionBeforeContext extends BaseContext {
  exec: {
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId: string): any;
    setAttribute(fqn: string, values: any): any;
    removeAttribute(fqn: string): any;
    setData(key: string, value: any): any;
    removeData(key: string): any;
    setItemData(key: string, value: any, itemId: string): any;
    removeItemData(key: string, itemId: string): any;
    setDutyAmount(dutyAmount: number): any;
  };
  get: {
    order(): any;
  };
}

export interface EmbeddedCommerceOrdersActionAfterContext extends BaseContext {
  exec: {
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId: string): any;
    setAttribute(fqn: string, values: any): any;
    removeAttribute(fqn: string): any;
    setData(key: string, value: any): any;
    removeData(key: string): any;
    setItemData(key: string, value: any, itemId: string): any;
    removeItemData(key: string, itemId: string): any;
    setDutyAmount(dutyAmount: number): any;
  };
  get: {
    order(): any;
  };
}

export interface EmbeddedCommerceOrdersCreateFromCartBeforeContext extends BaseContext {
  exec: {
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId: string): any;
    setAttribute(fqn: string, values: any): any;
    removeAttribute(fqn: string): any;
    setData(key: string, value: any): any;
    removeData(key: string): any;
    setItemData(key: string, value: any, itemId: string): any;
    removeItemData(key: string, itemId: string): any;
    setDutyAmount(dutyAmount: number): any;
  };
  get: {
    order(): any;
  };
}

export interface EmbeddedCommerceOrdersCreateFromCartAfterContext extends BaseContext {
  exec: {
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId: string): any;
    setAttribute(fqn: string, values: any): any;
    removeAttribute(fqn: string): any;
    setData(key: string, value: any): any;
    removeData(key: string): any;
    setItemData(key: string, value: any, itemId: string): any;
    removeItemData(key: string, itemId: string): any;
    setDutyAmount(dutyAmount: number): any;
  };
  get: {
    order(): any;
  };
}

// Payment Action Contexts
export interface EmbeddedCommercePaymentsActionPerformPaymentInteractionContext extends BaseContext {
  exec: {
    addPaymentInteraction(paymentInteraction: string): any;
    setPaymentAmountRequested(amount: number): any;
    setPaymentAmountCollected(amount: number): any;
    setPaymentAmountCredited(amount: number): any;
  };
  get: {
    payment(): any;
    paymentAction(): any;
  };
}

export interface EmbeddedCommercePaymentsActionBeforeContext extends BaseContext {
  exec: {
    setActionAmount(amount: number): any;
    setPaymentData(key: string, value: any): void;
    removePaymentData(key: string): void;
    setActionPreAuthFlag(isPreAuth: boolean): void;
  };
  setPaymentTerm(purchaseOrderPaymentTermObject: any): any;
  get: {
    payment(): any;
    paymentAction(): any;
  };
}

export interface EmbeddedCommercePaymentsActionAfterContext extends BaseContext {
  exec: {
    setActionAmount(amount: number): any;
    setFailedStateName(stateName: string): void;
    setSuccessFlag(isSuccess: boolean): void;
    setNewStateName(stateName: string): void;
    setPaymentData(key: string, value: any): void;
    removePaymentData(key: string): void;
    setRetryFlag(shouldRetry: boolean): void;
    setActionPreAuthFlag(isPreAuth: boolean): void;
  };
  get: {
    payment(): any;
    paymentAction(): any;
  };
}

// Customer Action Contexts
export interface EmbeddedCommerceCustomerAccountsVerifyExternalPasswordContext extends BaseContext {
  exec: {
    setSuccess(success: boolean): void;
  };
  get: {
    clearTextPassword(): string;
    externalPassword(): string;
  };
}

// Return Action Contexts
export interface EmbeddedCommerceReturnRetrieveReasonsContext extends BaseContext {
  exec: {
    setReasonList(reasonList: any[]): void;
  };
  get: {
    ReasonList(): any[];
  };
}

export interface EmbeddedCommerceCheckoutsPriceBeforeContext extends BaseContext {
  exec: {
    setHandlingAmount(handlingAmount: number): any;
    setItemHandlingAmount(handlingAmount: number, itemId: string): any;
  };
  get: {
    cart(): any;
  };
}

export interface EmbeddedCommerceReturnActionsBeforeContext extends BaseContext {
  exec: {
    addReturnItem(returnItem: any): any;
    setRMADeadline(rmaDeadline: Date): any;
  };
  get: {
    rma(): any;
    returnAction(): any;
  };
}

// Catalog Action Contexts
export interface EmbeddedCommerceCatalogStorefrontProductsGetPriceListHierachyContext extends BaseContext {
  get: {
    propertyValue(arg: string): any;
    priceListHierarchy(): any[];
  };
}

// Checkout Action Contexts
export interface EmbeddedCommerceCheckoutsPriceBeforeContext extends BaseContext {
  exec: {
    setHandlingAmount(handlingAmount: number): any;
    setItemHandlingAmount(handlingAmount: number, itemId: string): any;
  };
  get: {
    cart(): any;
  };
}

export interface EmbeddedCommerceReturnActionsBeforeContext extends BaseContext {
  exec: {
    addReturnItem(returnItem: any): any;
    setRMADeadline(rmaDeadline: Date): any;
  };
  get: {
    rma(): any;
    returnAction(): any;
  };
}

export interface EmbeddedCommerceReturnActionsAfterContext extends BaseContext {
  exec: {
    authorizeReturn(): any;
    rejectReturn(): any;
    cancelReturn(): any;
    closeReturn(): any;
  };
  get: {
    rma(): any;
    returnAction(): any;
  };
}

export interface EmbeddedCommerceReturnGetRmaLabelsBeforeContext extends BaseContext {
  exec: {
    setDestinationAddress(destinationAddressContact: any): any;
    setOriginAddress(originAddressContact: any): any;
    setShippingMethodCode(shippingMethodCode: string): any;
  };
  get: {
    getShipmentInfo(): any;
    getPackage(index: number): any;
    getPackagesCount(): number;
  };
}

export interface EmbeddedCommerceReturnGetRmaLabelsAfterContext extends BaseContext {
  get: {
    getShipmentInfo(): any;
    getPackage(index: number): any;
    getPackagesCount(): number;
  };
}



