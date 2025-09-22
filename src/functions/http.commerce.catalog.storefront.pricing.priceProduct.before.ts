import { Callback, HttpContext } from "../arcTypes";
import { TaxableLineItem } from "@kibocommerce/rest-sdk/clients/PricingStorefront/models";

function httpCommerceCatalogStorefrontPricingPriceProductBefore(context:HttpContext<TaxableLineItem>, callback: Callback) {
    console.log("http.commerce.catalog.storefront.pricing.priceProduct.before");
}

export default httpCommerceCatalogStorefrontPricingPriceProductBefore