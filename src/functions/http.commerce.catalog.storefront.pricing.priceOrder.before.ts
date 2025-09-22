import { Callback, HttpContext } from "../arcTypes";
import { TaxableOrder } from "@kibocommerce/rest-sdk/clients/PricingStorefront/models";

function httpCommerceCatalogStorefrontPricingPriceOrderBefore(context:HttpContext<TaxableOrder>, callback: Callback) {
    console.log("http.commerce.catalog.storefront.pricing.priceOrder.before");
}

export default httpCommerceCatalogStorefrontPricingPriceOrderBefore