import { Callback, HttpContext } from "../arcTypes";

import { TaxableOrder } from "@kibocommerce/rest-sdk/clients/PricingStorefront/models";


function httpCommerceCatalogStorefrontPricingRepriceOrderBefore(context:HttpContext<TaxableOrder>, callback: Callback) {
    console.log("http.commerce.catalog.storefront.pricing.repriceOrder.before");
}

export default httpCommerceCatalogStorefrontPricingRepriceOrderBefore