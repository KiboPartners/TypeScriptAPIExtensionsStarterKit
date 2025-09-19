
import { ActionId, Callback, createArcFunction } from "./arcTypes/index";
import { platformApplicationsInstallImplementation } from "./platformInstall";
import * as extensionFunctions from "./functions"

const embeddedCommerceCartsGetAfterFn = createArcFunction(
  ActionId["embedded.commerce.carts.get.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceCartsGetAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceCartsAddItemBeforeFn = createArcFunction(
  ActionId["embedded.commerce.carts.addItem.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceCartsAddItemBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceCartsAddItemAfterFn = createArcFunction(
  ActionId["embedded.commerce.carts.addItem.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceCartsAddItemAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceCartsUpdateItemBeforeFn = createArcFunction(
  ActionId["embedded.commerce.carts.updateItem.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceCartsUpdateItemBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceCartsUpdateItemAfterFn = createArcFunction(
  ActionId["embedded.commerce.carts.updateItem.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceCartsUpdateItemAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceCartsDeleteItemBeforeFn = createArcFunction(
  ActionId["embedded.commerce.carts.deleteItem.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceCartsDeleteItemBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceCartsDeleteItemAfterFn = createArcFunction(
  ActionId["embedded.commerce.carts.deleteItem.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceCartsDeleteItemAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceCartsDeleteCartBeforeFn = createArcFunction(
  ActionId["embedded.commerce.carts.deleteCart.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceCartsDeleteCartBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceCartsDeleteCartAfterFn = createArcFunction(
  ActionId["embedded.commerce.carts.deleteCart.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceCartsDeleteCartAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogAdminProductsUpdateProductBeforeFn = createArcFunction(
  ActionId["http.commerce.catalog.admin.products.updateProduct.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogAdminProductsUpdateProductBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogAdminProductsUpdateProductAfterFn = createArcFunction(
  ActionId["http.commerce.catalog.admin.products.updateProduct.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogAdminProductsUpdateProductAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogAdminCategoriesAddCategoryBeforeFn = createArcFunction(
  ActionId["http.commerce.catalog.admin.categories.addCategory.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogAdminCategoriesAddCategoryBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogAdminCategoriesAddCategoryAfterFn = createArcFunction(
  ActionId["http.commerce.catalog.admin.categories.addCategory.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogAdminCategoriesAddCategoryAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogAdminCategoriesUpdateCategoryBeforeFn = createArcFunction(
  ActionId["http.commerce.catalog.admin.categories.updateCategory.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogAdminCategoriesUpdateCategoryBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogAdminCategoriesUpdateCategoryAfterFn = createArcFunction(
  ActionId["http.commerce.catalog.admin.categories.updateCategory.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogAdminCategoriesUpdateCategoryAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontPricingPriceProductBeforeFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.pricing.priceProduct.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontPricingPriceProductBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontPricingPriceProductAfterFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.pricing.priceProduct.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontPricingPriceProductAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontPricingPriceProductsBeforeFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.pricing.priceProducts.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontPricingPriceProductsBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontPricingPriceProductsAfterFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.pricing.priceProducts.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontPricingPriceProductsAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontPricingPriceOrderBeforeFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.pricing.priceOrder.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontPricingPriceOrderBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontPricingPriceOrderAfterFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.pricing.priceOrder.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontPricingPriceOrderAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontPricingRepriceOrderBeforeFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.pricing.repriceOrder.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontPricingRepriceOrderBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontPricingRepriceOrderAfterFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.pricing.repriceOrder.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontPricingRepriceOrderAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontProductsGetProductBeforeFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.products.getProduct.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontProductsGetProductBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontProductsGetProductAfterFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.products.getProduct.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontProductsGetProductAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontProductsGetProductForIndexingBeforeFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.products.getProductForIndexing.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontProductsGetProductForIndexingBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontProductsGetProductForIndexingAfterFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.products.getProductForIndexing.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontProductsGetProductForIndexingAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontProductsGetProductsBeforeFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.products.getProducts.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontProductsGetProductsBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontProductsGetProductsAfterFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.products.getProducts.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontProductsGetProductsAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontProductsearchSearchBeforeFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.productsearch.search.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontProductsearchSearchBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontProductsearchSearchAfterFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.productsearch.search.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontProductsearchSearchAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontProductsLocationinventoriesBeforeFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.products.locationinventories.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontProductsLocationinventoriesBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontProductsLocationinventoriesAfterFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.products.locationinventories.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontProductsLocationinventoriesAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceCatalogStorefrontProductsGetPriceListHierachyFn = createArcFunction(
  ActionId["embedded.commerce.catalog.storefront.products.getPriceListHierachy"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceCatalogStorefrontProductsGetPriceListHierachy(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontProductsConfiguredProductBeforeFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.products.configuredProduct.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontProductsConfiguredProductBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontProductsConfiguredProductAfterFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.products.configuredProduct.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontProductsConfiguredProductAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontProductsValidateProductBeforeFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.products.validateProduct.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontProductsValidateProductBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontProductsValidateProductAfterFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.products.validateProduct.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontProductsValidateProductAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontProductsResolvePriceListBeforeFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.products.resolvePriceList.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontProductsResolvePriceListBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontProductsResolvePriceListAfterFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.products.resolvePriceList.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontProductsResolvePriceListAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontShippingRequestRatesBeforeFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.shipping.requestRates.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontShippingRequestRatesBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontShippingRequestRatesAfterFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.shipping.requestRates.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontShippingRequestRatesAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontShippingRequestMultiRatesBeforeFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.shipping.requestMultiRates.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontShippingRequestMultiRatesBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontShippingRequestMultiRatesAfterFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.shipping.requestMultiRates.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontShippingRequestMultiRatesAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontTaxEstimateTaxesBeforeFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.tax.estimateTaxes.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontTaxEstimateTaxesBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCatalogStorefrontTaxEstimateTaxesAfterFn = createArcFunction(
  ActionId["http.commerce.catalog.storefront.tax.estimateTaxes.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCatalogStorefrontTaxEstimateTaxesAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceCheckoutsPriceBeforeFn = createArcFunction(
  ActionId["embedded.commerce.checkouts.price.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceCheckoutsPriceBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerAccountsAddAccountBeforeFn = createArcFunction(
  ActionId["http.commerce.customer.accounts.addAccount.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerAccountsAddAccountBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerAccountsAddAccountAfterFn = createArcFunction(
  ActionId["http.commerce.customer.accounts.addAccount.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerAccountsAddAccountAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerAccountsAddAccountAndLoginBeforeFn = createArcFunction(
  ActionId["http.commerce.customer.accounts.addAccountAndLogin.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerAccountsAddAccountAndLoginBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerAccountsAddAccountAndLoginAfterFn = createArcFunction(
  ActionId["http.commerce.customer.accounts.addAccountAndLogin.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerAccountsAddAccountAndLoginAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

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

const httpCommerceCustomerAddressValidationAfterFn = createArcFunction(
  ActionId["http.commerce.customer.address.validation.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerAddressValidationAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerAccountsUpdateAccountBeforeFn = createArcFunction(
  ActionId["http.commerce.customer.accounts.updateAccount.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerAccountsUpdateAccountBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerAccountsUpdateAccountAfterFn = createArcFunction(
  ActionId["http.commerce.customer.accounts.updateAccount.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerAccountsUpdateAccountAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerAccountsChangePasswordBeforeFn = createArcFunction(
  ActionId["http.commerce.customer.accounts.changePassword.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerAccountsChangePasswordBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerAccountsChangePasswordAfterFn = createArcFunction(
  ActionId["http.commerce.customer.accounts.changePassword.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerAccountsChangePasswordAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerAccountsUpdateForgottenPasswordBeforeFn = createArcFunction(
  ActionId["http.commerce.customer.accounts.updateForgottenPassword.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerAccountsUpdateForgottenPasswordBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerAccountsUpdateForgottenPasswordAfterFn = createArcFunction(
  ActionId["http.commerce.customer.accounts.updateForgottenPassword.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerAccountsUpdateForgottenPasswordAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerAuthTicketsCreateUserAuthTicketAfterFn = createArcFunction(
  ActionId["http.commerce.customer.authTickets.createUserAuthTicket.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerAuthTicketsCreateUserAuthTicketAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerAuthTicketsCreateUserAuthTicketBeforeFn = createArcFunction(
  ActionId["http.commerce.customer.authTickets.createUserAuthTicket.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerAuthTicketsCreateUserAuthTicketBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceCustomerAccountsVerifyExternalPasswordFn = createArcFunction(
  ActionId["embedded.commerce.customer.accounts.verifyExternalPassword"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceCustomerAccountsVerifyExternalPassword(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerCreditsGetCreditsBeforeFn = createArcFunction(
  ActionId["http.commerce.customer.credits.getCredits.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerCreditsGetCreditsBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerCreditsGetCreditsAfterFn = createArcFunction(
  ActionId["http.commerce.customer.credits.getCredits.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerCreditsGetCreditsAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerCreditsGetCreditBeforeFn = createArcFunction(
  ActionId["http.commerce.customer.credits.getCredit.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerCreditsGetCreditBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerCreditsGetCreditAfterFn = createArcFunction(
  ActionId["http.commerce.customer.credits.getCredit.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerCreditsGetCreditAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerCreditsAddCreditBeforeFn = createArcFunction(
  ActionId["http.commerce.customer.credits.addCredit.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerCreditsAddCreditBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerCreditsAddCreditAfterFn = createArcFunction(
  ActionId["http.commerce.customer.credits.addCredit.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerCreditsAddCreditAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerCreditsUpdateCreditBeforeFn = createArcFunction(
  ActionId["http.commerce.customer.credits.updateCredit.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerCreditsUpdateCreditBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerCreditsUpdateCreditAfterFn = createArcFunction(
  ActionId["http.commerce.customer.credits.updateCredit.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerCreditsUpdateCreditAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerCreditsAssociateCreditToShopperBeforeFn = createArcFunction(
  ActionId["http.commerce.customer.credits.associateCreditToShopper.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerCreditsAssociateCreditToShopperBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerCreditsAssociateCreditToShopperAfterFn = createArcFunction(
  ActionId["http.commerce.customer.credits.associateCreditToShopper.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerCreditsAssociateCreditToShopperAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerCreditsDeleteCreditBeforeFn = createArcFunction(
  ActionId["http.commerce.customer.credits.deleteCredit.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerCreditsDeleteCreditBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerCreditsResendCreditCreatedEmailBeforeFn = createArcFunction(
  ActionId["http.commerce.customer.credits.resendCreditCreatedEmail.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerCreditsResendCreditCreatedEmailBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerCreditsGetTransactionsBeforeFn = createArcFunction(
  ActionId["http.commerce.customer.credits.getTransactions.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerCreditsGetTransactionsBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerCreditsGetTransactionsAfterFn = createArcFunction(
  ActionId["http.commerce.customer.credits.getTransactions.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerCreditsGetTransactionsAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerCreditsAddTransactionBeforeFn = createArcFunction(
  ActionId["http.commerce.customer.credits.addTransaction.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerCreditsAddTransactionBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerCreditsAddTransactionAfterFn = createArcFunction(
  ActionId["http.commerce.customer.credits.addTransaction.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerCreditsAddTransactionAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerCreditsGetAuditEntriesBeforeFn = createArcFunction(
  ActionId["http.commerce.customer.credits.getAuditEntries.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerCreditsGetAuditEntriesBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceCustomerCreditsGetAuditEntriesAfterFn = createArcFunction(
  ActionId["http.commerce.customer.credits.getAuditEntries.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceCustomerCreditsGetAuditEntriesAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceFulfillmentCreateShipmentsBeforeFn = createArcFunction(
  ActionId["http.commerce.fulfillment.createShipments.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceFulfillmentCreateShipmentsBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceOrdersAddItemBeforeFn = createArcFunction(
  ActionId["embedded.commerce.orders.addItem.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceOrdersAddItemBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceOrdersAddItemAfterFn = createArcFunction(
  ActionId["embedded.commerce.orders.addItem.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceOrdersAddItemAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceOrdersPriceBeforeFn = createArcFunction(
  ActionId["embedded.commerce.orders.price.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceOrdersPriceBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceOrdersPriceAfterFn = createArcFunction(
  ActionId["embedded.commerce.orders.price.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceOrdersPriceAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceOrdersDeleteItemBeforeFn = createArcFunction(
  ActionId["embedded.commerce.orders.deleteItem.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceOrdersDeleteItemBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceOrdersDeleteItemAfterFn = createArcFunction(
  ActionId["embedded.commerce.orders.deleteItem.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceOrdersDeleteItemAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceOrdersActionBeforeFn = createArcFunction(
  ActionId["embedded.commerce.orders.action.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceOrdersActionBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceOrdersActionAfterFn = createArcFunction(
  ActionId["embedded.commerce.orders.action.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceOrdersActionAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceOrdersCreateFromCartBeforeFn = createArcFunction(
  ActionId["embedded.commerce.orders.createFromCart.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceOrdersCreateFromCartBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceOrdersCreateFromCartAfterFn = createArcFunction(
  ActionId["embedded.commerce.orders.createFromCart.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceOrdersCreateFromCartAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceOrdersSetFulFillmentInfoBeforeFn = createArcFunction(
  ActionId["http.commerce.orders.setFulFillmentInfo.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceOrdersSetFulFillmentInfoBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceOrdersSetFulFillmentInfoAfterFn = createArcFunction(
  ActionId["http.commerce.orders.setFulFillmentInfo.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceOrdersSetFulFillmentInfoAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceOrdersSetBillingInfoBeforeFn = createArcFunction(
  ActionId["http.commerce.orders.setBillingInfo.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceOrdersSetBillingInfoBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceOrdersSetBillingInfoAfterFn = createArcFunction(
  ActionId["http.commerce.orders.setBillingInfo.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceOrdersSetBillingInfoAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceOrdersAddItemBeforeFn = createArcFunction(
  ActionId["http.commerce.orders.addItem.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceOrdersAddItemBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceOrdersAddItemAfterFn = createArcFunction(
  ActionId["http.commerce.orders.addItem.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceOrdersAddItemAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommercePaymentsActionPerformPaymentInteractionFn = createArcFunction(
  ActionId["embedded.commerce.payments.action.performPaymentInteraction"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommercePaymentsActionPerformPaymentInteraction(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommercePaymentsActionBeforeFn = createArcFunction(
  ActionId["embedded.commerce.payments.action.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommercePaymentsActionBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommercePaymentsActionAfterFn = createArcFunction(
  ActionId["embedded.commerce.payments.action.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommercePaymentsActionAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceReturnRetrieveReasonsFn = createArcFunction(
  ActionId["embedded.commerce.return.retrieveReasons"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceReturnRetrieveReasons(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceReturnsUpdateReturnBeforeFn = createArcFunction(
  ActionId["http.commerce.returns.updateReturn.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceReturnsUpdateReturnBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceReturnsUpdateReturnAfterFn = createArcFunction(
  ActionId["http.commerce.returns.updateReturn.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceReturnsUpdateReturnAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceReturnsDeleteReturnBeforeFn = createArcFunction(
  ActionId["http.commerce.returns.deleteReturn.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceReturnsDeleteReturnBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceReturnsDeleteReturnAfterFn = createArcFunction(
  ActionId["http.commerce.returns.deleteReturn.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceReturnsDeleteReturnAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceReturnsCreateReturnItemBeforeFn = createArcFunction(
  ActionId["http.commerce.returns.createReturnItem.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceReturnsCreateReturnItemBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceReturnsCreateReturnItemAfterFn = createArcFunction(
  ActionId["http.commerce.returns.createReturnItem.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceReturnsCreateReturnItemAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceReturnsDeleteOrderItemBeforeFn = createArcFunction(
  ActionId["http.commerce.returns.deleteOrderItem.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceReturnsDeleteOrderItemBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceReturnsDeleteOrderItemAfterFn = createArcFunction(
  ActionId["http.commerce.returns.deleteOrderItem.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceReturnsDeleteOrderItemAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceReturnsCreatePackageBeforeFn = createArcFunction(
  ActionId["http.commerce.returns.createPackage.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceReturnsCreatePackageBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceReturnsCreatePackageAfterFn = createArcFunction(
  ActionId["http.commerce.returns.createPackage.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceReturnsCreatePackageAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceReturnsUpdatePackageBeforeFn = createArcFunction(
  ActionId["http.commerce.returns.updatePackage.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceReturnsUpdatePackageBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceReturnsUpdatePackageAfterFn = createArcFunction(
  ActionId["http.commerce.returns.updatePackage.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceReturnsUpdatePackageAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceReturnsDeletePackageBeforeFn = createArcFunction(
  ActionId["http.commerce.returns.deletePackage.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceReturnsDeletePackageBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceReturnsDeletePackageAfterFn = createArcFunction(
  ActionId["http.commerce.returns.deletePackage.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceReturnsDeletePackageAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceReturnsCreatePackageShipmentsBeforeFn = createArcFunction(
  ActionId["http.commerce.returns.createPackageShipments.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceReturnsCreatePackageShipmentsBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceReturnsCreatePackageShipmentsAfterFn = createArcFunction(
  ActionId["http.commerce.returns.createPackageShipments.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceReturnsCreatePackageShipmentsAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceReturnsDeleteShipmentBeforeFn = createArcFunction(
  ActionId["http.commerce.returns.deleteShipment.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceReturnsDeleteShipmentBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceReturnsDeleteShipmentAfterFn = createArcFunction(
  ActionId["http.commerce.returns.deleteShipment.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceReturnsDeleteShipmentAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceReturnGetRmaLabelsBeforeFn = createArcFunction(
  ActionId["embedded.commerce.return.GetRmaLabels.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceReturnGetRmaLabelsBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceReturnGetRmaLabelsAfterFn = createArcFunction(
  ActionId["embedded.commerce.return.GetRmaLabels.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceReturnGetRmaLabelsAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceReturnActionsBeforeFn = createArcFunction(
  ActionId["embedded.commerce.return.actions.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceReturnActionsBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const embeddedCommerceReturnActionsAfterFn = createArcFunction(
  ActionId["embedded.commerce.return.actions.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.embeddedCommerceReturnActionsAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceRoutingCandidatesBeforeFn = createArcFunction(
  ActionId["http.commerce.routing.candidates.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceRoutingCandidatesBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceRoutingCandidatesAfterFn = createArcFunction(
  ActionId["http.commerce.routing.candidates.after"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceRoutingCandidatesAfter(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

const httpCommerceSettingsCheckoutPaymentsettingsUpdatePaymentSettingsBeforeFn = createArcFunction(
  ActionId["http.commerce.settings.checkout.paymentsettings.updatePaymentSettings.before"],
  function (context: any, callback: Callback) {
    try {
      extensionFunctions.httpCommerceSettingsCheckoutPaymentsettingsUpdatePaymentSettingsBefore(context, callback)
    } catch (e: any) {
      console.error(e)
    } finally {
      callback();
    }
  }
);

//TODO: Uncomment to enable functions
const enabledFunctions = {
  // "embedded.commerce.carts.get.after": embeddedCommerceCartsGetAfterFn,
  // "embedded.commerce.carts.addItem.before": embeddedCommerceCartsAddItemBeforeFn,
  // "embedded.commerce.carts.addItem.after": embeddedCommerceCartsAddItemAfterFn,
  // "embedded.commerce.carts.updateItem.before": embeddedCommerceCartsUpdateItemBeforeFn,
  // "embedded.commerce.carts.updateItem.after": embeddedCommerceCartsUpdateItemAfterFn,
  // "embedded.commerce.carts.deleteItem.before": embeddedCommerceCartsDeleteItemBeforeFn,
  // "embedded.commerce.carts.deleteItem.after": embeddedCommerceCartsDeleteItemAfterFn,
  // "embedded.commerce.carts.deleteCart.before": embeddedCommerceCartsDeleteCartBeforeFn,
  // "embedded.commerce.carts.deleteCart.after": embeddedCommerceCartsDeleteCartAfterFn,
  // "http.commerce.catalog.admin.products.updateProduct.before": httpCommerceCatalogAdminProductsUpdateProductBeforeFn,
  // "http.commerce.catalog.admin.products.updateProduct.after": httpCommerceCatalogAdminProductsUpdateProductAfterFn,
  // "http.commerce.catalog.admin.categories.addCategory.before": httpCommerceCatalogAdminCategoriesAddCategoryBeforeFn,
  // "http.commerce.catalog.admin.categories.addCategory.after": httpCommerceCatalogAdminCategoriesAddCategoryAfterFn,
  // "http.commerce.catalog.admin.categories.updateCategory.before": httpCommerceCatalogAdminCategoriesUpdateCategoryBeforeFn,
  // "http.commerce.catalog.admin.categories.updateCategory.after": httpCommerceCatalogAdminCategoriesUpdateCategoryAfterFn,
  // "http.commerce.catalog.storefront.pricing.priceProduct.before": httpCommerceCatalogStorefrontPricingPriceProductBeforeFn,
  // "http.commerce.catalog.storefront.pricing.priceProduct.after": httpCommerceCatalogStorefrontPricingPriceProductAfterFn,
  // "http.commerce.catalog.storefront.pricing.priceProducts.before": httpCommerceCatalogStorefrontPricingPriceProductsBeforeFn,
  // "http.commerce.catalog.storefront.pricing.priceProducts.after": httpCommerceCatalogStorefrontPricingPriceProductsAfterFn,
  // "http.commerce.catalog.storefront.pricing.priceOrder.before": httpCommerceCatalogStorefrontPricingPriceOrderBeforeFn,
  // "http.commerce.catalog.storefront.pricing.priceOrder.after": httpCommerceCatalogStorefrontPricingPriceOrderAfterFn,
  // "http.commerce.catalog.storefront.pricing.repriceOrder.before": httpCommerceCatalogStorefrontPricingRepriceOrderBeforeFn,
  // "http.commerce.catalog.storefront.pricing.repriceOrder.after": httpCommerceCatalogStorefrontPricingRepriceOrderAfterFn,
  // "http.commerce.catalog.storefront.products.getProduct.before": httpCommerceCatalogStorefrontProductsGetProductBeforeFn,
  // "http.commerce.catalog.storefront.products.getProduct.after": httpCommerceCatalogStorefrontProductsGetProductAfterFn,
  // "http.commerce.catalog.storefront.products.getProductForIndexing.before": httpCommerceCatalogStorefrontProductsGetProductForIndexingBeforeFn,
  // "http.commerce.catalog.storefront.products.getProductForIndexing.after": httpCommerceCatalogStorefrontProductsGetProductForIndexingAfterFn,
  // "http.commerce.catalog.storefront.products.getProducts.before": httpCommerceCatalogStorefrontProductsGetProductsBeforeFn,
  // "http.commerce.catalog.storefront.products.getProducts.after": httpCommerceCatalogStorefrontProductsGetProductsAfterFn,
  // "http.commerce.catalog.storefront.productsearch.search.before": httpCommerceCatalogStorefrontProductsearchSearchBeforeFn,
  // "http.commerce.catalog.storefront.productsearch.search.after": httpCommerceCatalogStorefrontProductsearchSearchAfterFn,
  // "http.commerce.catalog.storefront.products.locationinventories.before": httpCommerceCatalogStorefrontProductsLocationinventoriesBeforeFn,
  // "http.commerce.catalog.storefront.products.locationinventories.after": httpCommerceCatalogStorefrontProductsLocationinventoriesAfterFn,
  // "embedded.commerce.catalog.storefront.products.getPriceListHierachy": embeddedCommerceCatalogStorefrontProductsGetPriceListHierachyFn,
  // "http.commerce.catalog.storefront.products.configuredProduct.before": httpCommerceCatalogStorefrontProductsConfiguredProductBeforeFn,
  // "http.commerce.catalog.storefront.products.configuredProduct.after": httpCommerceCatalogStorefrontProductsConfiguredProductAfterFn,
  // "http.commerce.catalog.storefront.products.validateProduct.before": httpCommerceCatalogStorefrontProductsValidateProductBeforeFn,
  // "http.commerce.catalog.storefront.products.validateProduct.after": httpCommerceCatalogStorefrontProductsValidateProductAfterFn,
  // "http.commerce.catalog.storefront.products.resolvePriceList.before": httpCommerceCatalogStorefrontProductsResolvePriceListBeforeFn,
  // "http.commerce.catalog.storefront.products.resolvePriceList.after": httpCommerceCatalogStorefrontProductsResolvePriceListAfterFn,
  // "http.commerce.catalog.storefront.shipping.requestRates.before": httpCommerceCatalogStorefrontShippingRequestRatesBeforeFn,
  // "http.commerce.catalog.storefront.shipping.requestRates.after": httpCommerceCatalogStorefrontShippingRequestRatesAfterFn,
  // "http.commerce.catalog.storefront.shipping.requestMultiRates.before": httpCommerceCatalogStorefrontShippingRequestMultiRatesBeforeFn,
  // "http.commerce.catalog.storefront.shipping.requestMultiRates.after": httpCommerceCatalogStorefrontShippingRequestMultiRatesAfterFn,
  // "http.commerce.catalog.storefront.tax.estimateTaxes.before": httpCommerceCatalogStorefrontTaxEstimateTaxesBeforeFn,
  // "http.commerce.catalog.storefront.tax.estimateTaxes.after": httpCommerceCatalogStorefrontTaxEstimateTaxesAfterFn,
  // "embedded.commerce.checkouts.price.before": embeddedCommerceCheckoutsPriceBeforeFn,
  // "http.commerce.customer.accounts.addAccount.before": httpCommerceCustomerAccountsAddAccountBeforeFn,
  // "http.commerce.customer.accounts.addAccount.after": httpCommerceCustomerAccountsAddAccountAfterFn,
  // "http.commerce.customer.accounts.addAccountAndLogin.before": httpCommerceCustomerAccountsAddAccountAndLoginBeforeFn,
  // "http.commerce.customer.accounts.addAccountAndLogin.after": httpCommerceCustomerAccountsAddAccountAndLoginAfterFn,
  // "http.commerce.customer.address.validation.before": httpCommerceCustomerAddressValidationBeforeFn,
  // "http.commerce.customer.address.validation.after": httpCommerceCustomerAddressValidationAfterFn,
  // "http.commerce.customer.accounts.updateAccount.before": httpCommerceCustomerAccountsUpdateAccountBeforeFn,
  // "http.commerce.customer.accounts.updateAccount.after": httpCommerceCustomerAccountsUpdateAccountAfterFn,
  // "http.commerce.customer.accounts.changePassword.before": httpCommerceCustomerAccountsChangePasswordBeforeFn,
  // "http.commerce.customer.accounts.changePassword.after": httpCommerceCustomerAccountsChangePasswordAfterFn,
  // "http.commerce.customer.accounts.updateForgottenPassword.before": httpCommerceCustomerAccountsUpdateForgottenPasswordBeforeFn,
  // "http.commerce.customer.accounts.updateForgottenPassword.after": httpCommerceCustomerAccountsUpdateForgottenPasswordAfterFn,
  // "http.commerce.customer.authTickets.createUserAuthTicket.after": httpCommerceCustomerAuthTicketsCreateUserAuthTicketAfterFn,
  // "http.commerce.customer.authTickets.createUserAuthTicket.before": httpCommerceCustomerAuthTicketsCreateUserAuthTicketBeforeFn,
  // "embedded.commerce.customer.accounts.verifyExternalPassword": embeddedCommerceCustomerAccountsVerifyExternalPasswordFn,
  // "http.commerce.customer.credits.getCredits.before": httpCommerceCustomerCreditsGetCreditsBeforeFn,
  // "http.commerce.customer.credits.getCredits.after": httpCommerceCustomerCreditsGetCreditsAfterFn,
  // "http.commerce.customer.credits.getCredit.before": httpCommerceCustomerCreditsGetCreditBeforeFn,
  // "http.commerce.customer.credits.getCredit.after": httpCommerceCustomerCreditsGetCreditAfterFn,
  // "http.commerce.customer.credits.addCredit.before": httpCommerceCustomerCreditsAddCreditBeforeFn,
  // "http.commerce.customer.credits.addCredit.after": httpCommerceCustomerCreditsAddCreditAfterFn,
  // "http.commerce.customer.credits.updateCredit.before": httpCommerceCustomerCreditsUpdateCreditBeforeFn,
  // "http.commerce.customer.credits.updateCredit.after": httpCommerceCustomerCreditsUpdateCreditAfterFn,
  // "http.commerce.customer.credits.associateCreditToShopper.before": httpCommerceCustomerCreditsAssociateCreditToShopperBeforeFn,
  // "http.commerce.customer.credits.associateCreditToShopper.after": httpCommerceCustomerCreditsAssociateCreditToShopperAfterFn,
  // "http.commerce.customer.credits.deleteCredit.before": httpCommerceCustomerCreditsDeleteCreditBeforeFn,
  // "http.commerce.customer.credits.resendCreditCreatedEmail.before": httpCommerceCustomerCreditsResendCreditCreatedEmailBeforeFn,
  // "http.commerce.customer.credits.getTransactions.before": httpCommerceCustomerCreditsGetTransactionsBeforeFn,
  // "http.commerce.customer.credits.getTransactions.after": httpCommerceCustomerCreditsGetTransactionsAfterFn,
  // "http.commerce.customer.credits.addTransaction.before": httpCommerceCustomerCreditsAddTransactionBeforeFn,
  // "http.commerce.customer.credits.addTransaction.after": httpCommerceCustomerCreditsAddTransactionAfterFn,
  // "http.commerce.customer.credits.getAuditEntries.before": httpCommerceCustomerCreditsGetAuditEntriesBeforeFn,
  // "http.commerce.customer.credits.getAuditEntries.after": httpCommerceCustomerCreditsGetAuditEntriesAfterFn,
  // "http.commerce.fulfillment.createShipments.before": httpCommerceFulfillmentCreateShipmentsBeforeFn,
  // "embedded.commerce.orders.addItem.before": embeddedCommerceOrdersAddItemBeforeFn,
  // "embedded.commerce.orders.addItem.after": embeddedCommerceOrdersAddItemAfterFn,
  // "embedded.commerce.orders.price.before": embeddedCommerceOrdersPriceBeforeFn,
  // "embedded.commerce.orders.price.after": embeddedCommerceOrdersPriceAfterFn,
  // "embedded.commerce.orders.deleteItem.before": embeddedCommerceOrdersDeleteItemBeforeFn,
  // "embedded.commerce.orders.deleteItem.after": embeddedCommerceOrdersDeleteItemAfterFn,
  // "embedded.commerce.orders.action.before": embeddedCommerceOrdersActionBeforeFn,
  // "embedded.commerce.orders.action.after": embeddedCommerceOrdersActionAfterFn,
  // "embedded.commerce.orders.createFromCart.before": embeddedCommerceOrdersCreateFromCartBeforeFn,
  // "embedded.commerce.orders.createFromCart.after": embeddedCommerceOrdersCreateFromCartAfterFn,
  // "http.commerce.orders.setFulFillmentInfo.before": httpCommerceOrdersSetFulFillmentInfoBeforeFn,
  // "http.commerce.orders.setFulFillmentInfo.after": httpCommerceOrdersSetFulFillmentInfoAfterFn,
  // "http.commerce.orders.setBillingInfo.before": httpCommerceOrdersSetBillingInfoBeforeFn,
  // "http.commerce.orders.setBillingInfo.after": httpCommerceOrdersSetBillingInfoAfterFn,
  // "http.commerce.orders.addItem.before": httpCommerceOrdersAddItemBeforeFn,
  // "http.commerce.orders.addItem.after": httpCommerceOrdersAddItemAfterFn,
  // "embedded.commerce.payments.action.performPaymentInteraction": embeddedCommercePaymentsActionPerformPaymentInteractionFn,
  // "embedded.commerce.payments.action.before": embeddedCommercePaymentsActionBeforeFn,
  // "embedded.commerce.payments.action.after": embeddedCommercePaymentsActionAfterFn,
  // "embedded.commerce.return.retrieveReasons": embeddedCommerceReturnRetrieveReasonsFn,
  // "http.commerce.returns.updateReturn.before": httpCommerceReturnsUpdateReturnBeforeFn,
  // "http.commerce.returns.updateReturn.after": httpCommerceReturnsUpdateReturnAfterFn,
  // "http.commerce.returns.deleteReturn.before": httpCommerceReturnsDeleteReturnBeforeFn,
  // "http.commerce.returns.deleteReturn.after": httpCommerceReturnsDeleteReturnAfterFn,
  // "http.commerce.returns.createReturnItem.before": httpCommerceReturnsCreateReturnItemBeforeFn,
  // "http.commerce.returns.createReturnItem.after": httpCommerceReturnsCreateReturnItemAfterFn,
  // "http.commerce.returns.deleteOrderItem.before": httpCommerceReturnsDeleteOrderItemBeforeFn,
  // "http.commerce.returns.deleteOrderItem.after": httpCommerceReturnsDeleteOrderItemAfterFn,
  // "http.commerce.returns.createPackage.before": httpCommerceReturnsCreatePackageBeforeFn,
  // "http.commerce.returns.createPackage.after": httpCommerceReturnsCreatePackageAfterFn,
  // "http.commerce.returns.updatePackage.before": httpCommerceReturnsUpdatePackageBeforeFn,
  // "http.commerce.returns.updatePackage.after": httpCommerceReturnsUpdatePackageAfterFn,
  // "http.commerce.returns.deletePackage.before": httpCommerceReturnsDeletePackageBeforeFn,
  // "http.commerce.returns.deletePackage.after": httpCommerceReturnsDeletePackageAfterFn,
  // "http.commerce.returns.createPackageShipments.before": httpCommerceReturnsCreatePackageShipmentsBeforeFn,
  // "http.commerce.returns.createPackageShipments.after": httpCommerceReturnsCreatePackageShipmentsAfterFn,
  // "http.commerce.returns.deleteShipment.before": httpCommerceReturnsDeleteShipmentBeforeFn,
  // "http.commerce.returns.deleteShipment.after": httpCommerceReturnsDeleteShipmentAfterFn,
  // "embedded.commerce.return.GetRmaLabels.before": embeddedCommerceReturnGetRmaLabelsBeforeFn,
  // "embedded.commerce.return.GetRmaLabels.after": embeddedCommerceReturnGetRmaLabelsAfterFn,
  // "embedded.commerce.return.actions.before": embeddedCommerceReturnActionsBeforeFn,
  // "embedded.commerce.return.actions.after": embeddedCommerceReturnActionsAfterFn,
  // "http.commerce.routing.candidates.before": httpCommerceRoutingCandidatesBeforeFn,
  // "http.commerce.routing.candidates.after": httpCommerceRoutingCandidatesAfterFn,
  // "http.commerce.settings.checkout.paymentsettings.updatePaymentSettings.before": httpCommerceSettingsCheckoutPaymentsettingsUpdatePaymentSettingsBeforeFn,
};

// Now create the platform install function that references the functions object
const platformApplicationsInstall = createArcFunction(
  ActionId["embedded.platform.applications.install"],
  function (context: any, callback: Callback) {
    platformApplicationsInstallImplementation(context, callback, enabledFunctions).then(() => {
      callback()
    })
  }
);

// Add the platform install function to the functions object
(enabledFunctions as any)["embedded.platform.applications.install"] = platformApplicationsInstall;

export default enabledFunctions;
