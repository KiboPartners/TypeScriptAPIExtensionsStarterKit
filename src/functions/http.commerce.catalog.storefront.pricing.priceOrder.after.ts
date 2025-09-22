import { Callback, HttpContext } from "../arcTypes";

import { TaxableOrder } from "@kibocommerce/rest-sdk/clients/PricingStorefront/models";

function httpCommerceCatalogStorefrontPricingPriceOrderAfter(context:HttpContext<TaxableOrder>, callback: Callback) {
    console.log("http.commerce.catalog.storefront.pricing.priceOrder.after");
}

export default httpCommerceCatalogStorefrontPricingPriceOrderAfter