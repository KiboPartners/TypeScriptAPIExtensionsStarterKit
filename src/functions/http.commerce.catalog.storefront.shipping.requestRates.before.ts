import { Callback, HttpContext } from "../arcTypes";
import { RateRequest, RatesResponse } from "@kibocommerce/rest-sdk/clients/ShippingStorefront/models";

function httpCommerceCatalogStorefrontShippingRequestRatesBefore(context:HttpContext<RateRequest, RatesResponse>, callback: Callback) {
    console.log("http.commerce.catalog.storefront.shipping.requestRates.before");
}

export default httpCommerceCatalogStorefrontShippingRequestRatesBefore