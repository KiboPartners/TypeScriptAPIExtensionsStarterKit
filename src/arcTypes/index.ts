import { Configuration } from "@kibocommerce/rest-sdk";
import {Cart, CartItem, Order, Payment, PaymentAction, Return, ReturnAction, CommerceRuntimeOrderItem} from "@kibocommerce/rest-sdk/clients/Commerce/models"
import {
  CustomAttribute,
  RateRequest,
  RatesResponse,
  CommerceRuntimeAddress as Address,
} from "@kibocommerce/rest-sdk/clients/ShippingStorefront/models";
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
  "http.commerce.catalog.storefront.shipping.getLabels.before",
  "http.commerce.catalog.storefront.shipping.getLabels.after",
  "http.commerce.catalog.storefront.tax.estimateTaxes.before",
  "http.commerce.catalog.storefront.tax.estimateTaxes.after",
  "embedded.commerce.checkouts.price.before",
  "embedded.commerce.email.render.before",
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
  "http.commerce.fulfillment.createShipment.before",
  "http.commerce.fulfillment.createShipment.after",
  "http.commerce.fulfillment.createShipments.before",
  "http.commerce.fulfillment.createShipments.after",
  "http.commerce.fulfillment.getShipment.before",
  "http.commerce.fulfillment.getShipment.after",
  "http.commerce.fulfillment.getShipments.before",
  "http.commerce.fulfillment.getShipments.after",
  "http.commerce.fulfillment.fulfillShipment.before",
  "http.commerce.fulfillment.fulfillShipment.after",
  "http.commerce.fulfillment.reassignShipment.before",
  "http.commerce.fulfillment.reassignShipment.after",
  "http.commerce.fulfillment.reassignShipmentItems.before",
  "http.commerce.fulfillment.reassignShipmentItems.after",
  "http.commerce.fulfillment.replaceShipment.before",
  "http.commerce.fulfillment.replaceShipment.after",
  "http.commerce.fulfillment.rejectShipment.before",
  "http.commerce.fulfillment.rejectShipment.after",
  "http.commerce.fulfillment.rejectShipmentItems.before",
  "http.commerce.fulfillment.rejectShipmentItems.after",
  "http.commerce.fulfillment.transferShipment.before",
  "http.commerce.fulfillment.transferShipment.after",
  "http.commerce.fulfillment.transferShipmentItems.before",
  "http.commerce.fulfillment.transferShipmentItems.after",
  "http.commerce.fulfillment.futureShipments.before",
  "http.commerce.fulfillment.futureShipments.after",
  "http.commerce.fulfillment.futureShipmentItems.before",
  "http.commerce.fulfillment.futureShipmentItems.after",
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
  "http.commerce.routing.suggestion.before",
  "http.commerce.routing.suggestion.after",
  "http.commerce.settings.checkout.paymentsettings.updatePaymentSettings.before",
  "embedded.platform.applications.install",
  "embedded.platform.applications.uninstall"
}

export interface HttpContext<T, F = T> extends BaseContext {
  request: {
    body: T;
  };
  response: {
    body: F;
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
  purchaseLocation?: string;
};

export interface ArcFunction {
  actionName: string;
  customFunction: (
    context: any,
    callback: Callback
  ) => void | Promise<void>;
}

export type Callback  = (errorMessage?: string | null | undefined, res?: any ) => void

export function createArcFunction(
  actionName: ActionId,
  customFunction: (
    context: any,
    callback: Callback
  ) => void | Promise<void>
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
    orderItem(): CommerceRuntimeOrderItem;
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
    orderItem(): CommerceRuntimeOrderItem;
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
    orderItem(): CommerceRuntimeOrderItem;
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
    orderItem(): CommerceRuntimeOrderItem;
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
    setShipmentCreationOffset(offset: number): void;
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

// Email Action Contexts
export interface EmbeddedCommerceEmailRenderBeforeContext extends BaseContext {
  exec: {
    setSubject(subject: string): void;
    setTemplate(template: string): void;
    setModel(model: any): void;
    suppressEmail(): void;
  };
  items: {
    getSubject: string;
    getModel: any;
    getUser: any;
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
    priceListHierachy(): any[];
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

// --- http.commerce.routing.suggestion.after ---

export interface RoutingRequestItem {
  orderItemID?: string | number;
  customItemData?: {
    overrideRoutingLocation?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

export interface RoutingRequestShippingAddress {
  addressLine1?: string;
  addressLine2?: string;
  phone?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  countryCode?: string;
  latitude?: number;
  longitude?: number;
  [key: string]: any;
}

export interface RoutingRequestExtendedCustomerInfo {
  customerId?: string;
  accountType?: string;
  taxExempt?: boolean;
  customerSinceDate?: string;
  [key: string]: any;
}

export interface RoutingRequestExtendedOrderInfo {
  type?: string;
  [key: string]: any;
}

export interface RoutingRequest {
  orderType?: string;
  shippingAddress?: RoutingRequestShippingAddress;
  isExpress?: boolean;
  extendedCustomerInfo?: RoutingRequestExtendedCustomerInfo;
  extendedOrderInfo?: RoutingRequestExtendedOrderInfo;
  items?: RoutingRequestItem[];
  orderID?: number;
  total?: number;
  forceSTHConsolidationOnSplitShipments?: boolean;
  sthConsolidationLocationOverride?: string;
  [key: string]: any;
}

export interface AssignmentSuggestion {
  orderItemID?: string | number;
  locationCode?: string;
  quantity?: number;
  route?: any;
  [key: string]: any;
}

export interface StateChangeSuggestion {
  orderItemID?: string | number;
  stateChange?: string;
  quantity?: number;
  [key: string]: any;
}

export interface RoutingResponse {
  assignmentSuggestions?: { [itemId: string]: AssignmentSuggestion[] };
  stateChangeSuggestions?: { [itemId: string]: StateChangeSuggestion };
  [key: string]: any;
}

export type HttpCommerceRoutingSuggestionAfterContext = HttpContext<RoutingRequest, RoutingResponse>;
// --- http.commerce.catalog.storefront.shipping.getLabels / requestRates ---

/**
 * The following is the structure of the Arc configuration.
 * rateName is the name of the rate as it will appear in Admin and Storefront
 * rateCode is how the rate will appear on orders
 * shippingGroups is a list of possible prices of the items.
 *  It will try to match based on product code or product type, and assign the result
 *  if there is a match, otherwise it will continue on.
 */
export interface CustomRatesConfig {
  carrierId: string;
  rateName: string;
  rateCode: string;
  shippingGroups: ShippingGroupConfig[];
}

/**
 * The structure of the shipping group.
 * productCodes is the list of product codes to match on
 * shippingPerItem is the amount that the line item will cost
 * productType is the product type to match on
 */
export interface ShippingGroupConfig {
  productCodes?: string[];
  shippingPerItem: number;
  productTypes?: string[];
}

export type LabelContext = {
  response: {
    body: any;
  };
  request: {
    body: LabelRequest;
  };
  configuration: any;
  apiContext: {
    siteId?: number;
  };
};

export type RatesContext = {
  response: {
    body: RatesResponse;
  };
  request: {
    body: RateRequest;
  };
  configuration: CustomRatesConfig;
};

/**
 * Defines a measurement with unit and value.
 */
interface Measurement {
  unit: string;
  value: number;
}

/**
 * Defines a full set of measurements for a package or product.
 */
interface Measurements {
  weight: Measurement;
  height: Measurement;
  width: Measurement;
  length: Measurement;
  girth?: number;
}

/**
 * Represents a product's property.
 */
interface ProductProperty {
  attributeFQN: string;
  name: string;
  values: Array<{ value: any }>;
}

/**
 * A summary of a product within a package.
 */
interface ProductSummary {
  productCode: string;
  productType: string;
  categories: any[];
  unitMeasurements: Measurements;
  properties: ProductProperty[];
  options: any[];
  productDescription: string;
  quantity: number;
  price: number;
}

/**
 * Represents a single package within a shipment.
 */
export interface Package {
  id: string;
  contentsValue: number | null;
  isGift: boolean;
  measurements: Measurements;
  packagingType: string;
  productSummaries: ProductSummary[];
  signatureOption: string;
  customAttributes: CustomAttribute[];
}

/**
 * Represents the contact information for origin or destination.
 */
interface Contact {
  id: number;
  email: string;
  firstName: string;
  middleNameOrInitial: string;
  lastNameOrSurname: string;
  companyOrOrganization: string;
  phoneNumbers: {
    home: string;
    mobile: string;
    work: string;
  };
  address: Address;
}

/**
 * Represents the main shipment object.
 */
interface Shipment {
  orderTotal: number;
  destination: Contact;
  origin: Contact;
  fulfillmentLocationCode: string;
  packages: Package[];
  customAttributes: CustomAttribute[];
  estimatedShipmentDate: string | null;
}

/**
 * Represents a customer reference number.
 */
interface CustomerReference {
  key: string;
  value: string | number;
}

// --- Extended Interface ---

/**
 * Extends the base RateRequest to include properties specific to the GetLabels action.
 * @export
 * @interface LabelRequest
 */
export interface LabelRequest extends RateRequest {
  /**
   * The detailed shipment object containing packages, addresses, and fulfillment info.
   * @type {Shipment}
   * @memberof LabelRequest
   */
  shipment?: Shipment;

  /**
   * The carrier ID to be used for generating the label (e.g., "ups", "fedex").
   * @type {string}
   * @memberof LabelRequest
   */
  carrierId?: string;

  /**
   * The specific service type from the carrier (e.g., "ups_UPS_GROUND").
   * @type {string}
   * @memberof LabelRequest
   */
  shippingServiceType?: string;

  /**
   * The type of request, e.g., "Shipment".
   * @type {string}
   * @memberof LabelRequest
   */
  shipmentRequestType?: string;

  /**
   * The required signature option.
   * @type {string}
   * @memberof LabelRequest
   */
  signatureOption?: string;

  /**
   * The desired format for the shipping label (e.g., "LASER", "PNG").
   * @type {string}
   * @memberof LabelRequest
   */
  labelFormat?: string;

  /**
   * Customer-specific reference numbers.
   * @type {Array<CustomerReference>}
   * @memberof LabelRequest
   */
  customerReferences?: CustomerReference[];

  /**
   * The shipment number associated with this label request.
   * @type {number}
   * @memberof LabelRequest
   */
  relatedShipmentNumber?: number;

  /**
   * References for shipment consolidation.
   * @type {any}
   * @memberof LabelRequest
   */
  consolidationReferences?: any | null;

  /**
   * The method of fulfillment (e.g., "Delivery").
   * @type {string}
   * @memberof LabelRequest
   */
  fulfillmentMethod?: string;
}

export interface ShipmentResponse {
  shippingTotal: Money;
  trackingNumber: string;
  packageResponses: PackageResponse[];
  customAttributes: CustomAttribute[];
  messages: Notification[];
  isSuccessful: boolean;
}

/**
 * Defines a monetary value with a currency code.
 * Used by: ShipmentResponse
 */
export interface Money {
  currencyCode: string;
  value: number;
}

/**
 * Represents the response for a single package within a shipment.
 * Used by: ShipmentResponse
 */
export interface PackageResponse {
  id: string;
  trackingNumber: string;
  label: ShippingLabel;
  customAttributes: CustomAttribute[];
  integratorId?: string;
}

/**
 * Contains the data for a printable shipping label.
 * Used by: PackageResponse
 */
export interface ShippingLabel {
  imageFormat: string;
  imageData: number[] | string;
  labelUrl?: string | null;
}

/**
 * Provides a message from the shipping carrier or system.
 * Used by: ShipmentResponse
 */
export interface Notification {
  source: string;
  message: string;
  code: string;
}



