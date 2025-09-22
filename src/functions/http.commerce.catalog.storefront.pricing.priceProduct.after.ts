import { Callback, HttpContext } from "../arcTypes";

import { TaxableLineItem } from "@kibocommerce/rest-sdk/clients/PricingStorefront/models";

function httpCommerceCatalogStorefrontPricingPriceProductAfter(context:HttpContext<TaxableLineItem>, callback: Callback) {
    console.log("http.commerce.catalog.storefront.pricing.priceProduct.after");
}

export default httpCommerceCatalogStorefrontPricingPriceProductAfter