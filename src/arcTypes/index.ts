import { Configuration } from "@kibocommerce/rest-sdk";
import {Cart, CartItem, Order, OrderItem, Payment, PaymentAction, Return, ReturnAction} from "@kibocommerce/rest-sdk/clients/Commerce/models"
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

export interface HttpContext<T> extends BaseContext {
  request: {
    body: T;
  };
  response: {
    body: T;
  };
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
  exec: void;
  get: void;
}

// Cart Action Contexts
export interface EmbeddedCommerceCartsGetAfterContext extends BaseContext {
  exec: {
    setData(key: string, value: any): void;
    removeData(key: string): void;
    setItemData(key: string, value: any, itemId: string): void;
    removeItemData(key: string, itemId: string): void;
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId: string): void;
    removeItem(itemId: string): void;
  };
  get: {
    cart(): Cart;
  };
}

export interface EmbeddedCommerceCartsAddItemBeforeContext extends BaseContext {
  exec: {
    setData(key: string, value: any): void;
    removeData(key: string): void;
    setItemData(key: string, value: any, itemId?: string): void;
    removeItemData(key: string, itemId?: string): void;
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId?: string): void;
    removeItem(itemId: string): void;
  };
  get: {
    cart(): Cart;
    cartItem(): CartItem;
  };
}

export interface EmbeddedCommerceCartsAddItemAfterContext extends BaseContext {
  exec: {
    setData(key: string, value: any): void;
    removeData(key: string): void;
    setItemData(key: string, value: any, itemId?: string): void;
    removeItemData(key: string, itemId?: string): void;
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId?: string): void;
    removeItem(itemId: string): void;
  };
  get: {
    cart(): Cart;
    cartItem(): CartItem;
  };
}

export interface EmbeddedCommerceCartsUpdateItemBeforeContext extends BaseContext {
  exec: {
    setData(key: string, value: any): void;
    removeData(key: string): void;
    setItemData(key: string, value: any, itemId?: string): void;
    removeItemData(key: string, itemId?: string): void;
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId?: string): void;
    removeItem(itemId: string): void;
  };
  get: {
    cart(): Cart;
    cartItem(): CartItem;
  };
}

export interface EmbeddedCommerceCartsUpdateItemAfterContext extends BaseContext {
  exec: {
    setData(key: string, value: any): void;
    removeData(key: string): void;
    setItemData(key: string, value: any, itemId?: string): void;
    removeItemData(key: string, itemId?: string): void;
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId?: string): void;
    removeItem(itemId: string): void;
  };
  get: {
    cart(): Cart;
    cartItem(): CartItem;
  };
}

export interface EmbeddedCommerceCartsDeleteItemBeforeContext extends BaseContext {
  exec: {
    setData(key: string, value: any): void;
    removeData(key: string): void;
    setItemData(key: string, value: any, itemId?: string): void;
    removeItemData(key: string, itemId?: string): void;
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId?: string): void;
    removeItem(itemId: string): void;
  };
  get: {
    cart(): Cart;
    cartItem(): CartItem;
  };
}

export interface EmbeddedCommerceCartsDeleteItemAfterContext extends BaseContext {
  exec: {
    setData(key: string, value: any): void;
    removeData(key: string): void;
    setItemData(key: string, value: any, itemId?: string): void;
    removeItemData(key: string, itemId?: string): void;
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId?: string): void;
    removeItem(itemId: string): void;
  };
  get: {
    cart(): Cart;
    cartItem(): CartItem;
  };
}

export interface EmbeddedCommerceCartsDeleteCartBeforeContext extends BaseContext {
  exec: {
    setData(key: string, value: any): void;
    removeData(key: string): void;
    setItemData(key: string, value: any, itemId: string): void;
    removeItemData(key: string, itemId: string): void;
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId: string): void;
    removeItem(itemId: string): void;
  };
  get: {
    cart(): Cart;
  };
}

export interface EmbeddedCommerceCartsDeleteCartAfterContext extends BaseContext {
  exec: {
    setData(key: string, value: any): void;
    removeData(key: string): void;
    setItemData(key: string, value: any, itemId: string): void;
    removeItemData(key: string, itemId: string): void;
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId: string): void;
    removeItem(itemId: string): void;
  };
  get: {
    cart(): Cart;
  };
}

// Order Action Contexts
export interface EmbeddedCommerceOrdersAddItemBeforeContext extends BaseContext {
  exec: {
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId?: string): void;
    setAttribute(fqn: string, values: any): void;
    removeAttribute(fqn: string): void;
    setData(key: string, value: any): void;
    removeData(key: string): void;
    setItemData(key: string, value: any, itemId?: string): void;
    removeItemData(key: string, itemId?: string): void;
    setDutyAmount(dutyAmount: number): void;
    setItemDutyAmount(dutyAmount: number, itemId?: string): void;
  };
  get: {
    order(): Order;
    orderItem(): OrderItem;
  };
}

export interface EmbeddedCommerceOrdersAddItemAfterContext extends BaseContext {
  exec: {
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId?: string): void;
    setAttribute(fqn: string, values: any): void;
    removeAttribute(fqn: string): void;
    setData(key: string, value: any): void;
    removeData(key: string): void;
    setItemData(key: string, value: any, itemId?: string): void;
    removeItemData(key: string, itemId?: string): void;
    setDutyAmount(dutyAmount: number): void;
    setItemDutyAmount(dutyAmount: number, itemId?: string): void;
  };
  get: {
    order(): Order;
    orderItem(): OrderItem;
  };
}

export interface EmbeddedCommerceOrdersPriceBeforeContext extends BaseContext {
  exec: {
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId: string): void;
    setAttribute(fqn: string, values: any): void;
    removeAttribute(fqn: string): void;
    setData(key: string, value: any): void;
    removeData(key: string): void;
    setItemData(key: string, value: any, itemId: string): void;
    removeItemData(key: string, itemId: string): void;
    setDutyAmount(dutyAmount: number): void;
    setHandlingAmount(handlingAmount: number): void;
    setItemHandlingAmount(handlingAmount: number, itemId: string): void;
  };
  get: {
    order(): Order;
  };
}

export interface EmbeddedCommerceOrdersPriceAfterContext extends BaseContext {
  exec: {
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId: string): void;
    setAttribute(fqn: string, values: any): void;
    removeAttribute(fqn: string): void;
    setData(key: string, value: any): void;
    removeData(key: string): void;
    setItemData(key: string, value: any, itemId: string): void;
    removeItemData(key: string, itemId: string): void;
    setDutyAmount(dutyAmount: number): void;
  };
  get: {
    order(): Order;
  };
}

export interface EmbeddedCommerceOrdersDeleteItemBeforeContext extends BaseContext {
  exec: {
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId?: string): void;
    setAttribute(fqn: string, values: any): void;
    removeAttribute(fqn: string): void;
    setData(key: string, value: any): void;
    removeData(key: string): void;
    setItemData(key: string, value: any, itemId?: string): void;
    removeItemData(key: string, itemId?: string): void;
    setDutyAmount(dutyAmount: number): void;
    setItemDutyAmount(dutyAmount: number, itemId?: string): void;
  };
  get: {
    order(): Order;
    orderItem(): OrderItem;
  };
}

export interface EmbeddedCommerceOrdersDeleteItemAfterContext extends BaseContext {
  exec: {
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId?: string): void;
    setAttribute(fqn: string, values: any): void;
    removeAttribute(fqn: string): void;
    setData(key: string, value: any): void;
    removeData(key: string): void;
    setItemData(key: string, value: any, itemId?: string): void;
    removeItemData(key: string, itemId?: string): void;
    setDutyAmount(dutyAmount: number): void;
    setItemDutyAmount(dutyAmount: number, itemId?: string): void;
  };
  get: {
    order(): Order;
    orderItem(): OrderItem;
  };
}

export interface EmbeddedCommerceOrdersActionBeforeContext extends BaseContext {
  exec: {
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId: string): void;
    setAttribute(fqn: string, values: any): void;
    removeAttribute(fqn: string): void;
    setData(key: string, value: any): void;
    removeData(key: string): void;
    setItemData(key: string, value: any, itemId: string): void;
    removeItemData(key: string, itemId: string): void;
    setDutyAmount(dutyAmount: number): void;
  };
  get: {
    order(): Order;
  };
}

export interface EmbeddedCommerceOrdersActionAfterContext extends BaseContext {
  exec: {
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId: string): void;
    setAttribute(fqn: string, values: any): void;
    removeAttribute(fqn: string): void;
    setData(key: string, value: any): void;
    removeData(key: string): void;
    setItemData(key: string, value: any, itemId: string): void;
    removeItemData(key: string, itemId: string): void;
    setDutyAmount(dutyAmount: number): void;
    setShipmentCreationOffset(offset: number): void;
  };
  get: {
    order(): Order;
  };
}

export interface EmbeddedCommerceOrdersCreateFromCartBeforeContext extends BaseContext {
  exec: {
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId: string): void;
    setAttribute(fqn: string, values: any): void;
    removeAttribute(fqn: string): void;
    setData(key: string, value: any): void;
    removeData(key: string): void;
    setItemData(key: string, value: any, itemId: string): void;
    removeItemData(key: string, itemId: string): void;
    setDutyAmount(dutyAmount: number): void;
    setShipmentCreationOffset(offset: number): void;
  };
  get: {
    order(): Order;
  };
}

export interface EmbeddedCommerceOrdersCreateFromCartAfterContext extends BaseContext {
  exec: {
    setItemAllocation(allocationId: number, expiration: Date, productCode: string, itemId: string): void;
    setAttribute(fqn: string, values: any): void;
    removeAttribute(fqn: string): void;
    setData(key: string, value: any): void;
    removeData(key: string): void;
    setItemData(key: string, value: any, itemId: string): void;
    removeItemData(key: string, itemId: string): void;
    setDutyAmount(dutyAmount: number): void;
  };
  get: {
    order(): Order;
  };
}

// Payment Action Contexts
export interface EmbeddedCommercePaymentsActionPerformPaymentInteractionContext extends BaseContext {
  exec: {
    addPaymentInteraction(paymentInteraction: string): void;
    setPaymentAmountRequested(amount: number): void;
    setPaymentAmountCollected(amount: number): void;
    setPaymentAmountCredited(amount: number): void;
  };
  get: {
    payment(): Payment;
    paymentAction(): PaymentAction;
  };
}

export interface EmbeddedCommercePaymentsActionBeforeContext extends BaseContext {
  exec: {
    setActionAmount(amount: number): void;
    setPaymentData(key: string, value: any): void;
    removePaymentData(key: string): void;
    setActionPreAuthFlag(isPreAuth: boolean): void;
  };
  setPaymentTerm(purchaseOrderPaymentTermObject: any): void;
  get: {
    payment(): Payment;
    paymentAction(): PaymentAction;
  };
}

export interface EmbeddedCommercePaymentsActionAfterContext extends BaseContext {
  exec: {
    setActionAmount(amount: number): void;
    setFailedStateName(stateName: string): void;
    setSuccessFlag(isSuccess: boolean): void;
    setNewStateName(stateName: string): void;
    setPaymentData(key: string, value: any): void;
    removePaymentData(key: string): void;
    setRetryFlag(shouldRetry: boolean): void;
    setActionPreAuthFlag(isPreAuth: boolean): void;
  };
  get: {
    payment(): Payment;
    paymentAction(): PaymentAction;
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
    setHandlingAmount(handlingAmount: number): void;
    setItemHandlingAmount(handlingAmount: number, itemId: string): void;
  };
  get: {
    cart(): Cart;
  };
}

export interface EmbeddedCommerceReturnActionsBeforeContext extends BaseContext {
  exec: {
    addReturnItem(returnItem: any): void;
    setRMADeadline(rmaDeadline: Date): void;
  };
  get: {
    rma(): Return;
    returnAction(): ReturnAction;
  };
}

// Catalog Action Contexts
export interface EmbeddedCommerceCatalogStorefrontProductsGetPriceListHierachyContext extends BaseContext {
  get: {
    propertyValue(arg: string): void;
    priceListHierarchy(): any[];
  };
}

// Checkout Action Contexts
export interface EmbeddedCommerceCheckoutsPriceBeforeContext extends BaseContext {
  exec: {
    setHandlingAmount(handlingAmount: number): void;
    setItemHandlingAmount(handlingAmount: number, itemId: string): void;
  };
  get: {
    cart(): Cart;
  };
}

export interface EmbeddedCommerceReturnActionsBeforeContext extends BaseContext {
  exec: {
    addReturnItem(returnItem: any): void;
    setRMADeadline(rmaDeadline: Date): void;
  };
  get: {
    rma(): Return;
    returnAction(): ReturnAction;
  };
}

export interface EmbeddedCommerceReturnActionsAfterContext extends BaseContext {
  exec: {
    authorizeReturn(): void;
    rejectReturn(): void;
    cancelReturn(): void;
    closeReturn(): void;
  };
  get: {
    rma(): Return;
    returnAction(): ReturnAction;
  };
}

export interface EmbeddedCommerceReturnGetRmaLabelsBeforeContext extends BaseContext {
  exec: {
    setDestinationAddress(destinationAddressContact: any): void;
    setOriginAddress(originAddressContact: any): void;
    setShippingMethodCode(shippingMethodCode: string): void;
  };
  get: {
    getShipmentInfo(): void;
    getPackage(index: number): void;
    getPackagesCount(): number;
  };
}

export interface EmbeddedCommerceReturnGetRmaLabelsAfterContext extends BaseContext {
  get: {
    getShipmentInfo(): void;
    getPackage(index: number): void;
    getPackagesCount(): number;
  };
}



