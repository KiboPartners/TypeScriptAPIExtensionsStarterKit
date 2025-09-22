import { Callback, HttpContext } from "../arcTypes";
import {TaxableLineItem} from "@kibocommerce/rest-sdk/clients/PricingStorefront/models";

function httpCommerceCatalogStorefrontPricingPriceProductsBefore(context:HttpContext<TaxableLineItem[]>, callback: Callback) {
    console.log("http.commerce.catalog.storefront.pricing.priceProducts.before");
}

export default httpCommerceCatalogStorefrontPricingPriceProductsBefore