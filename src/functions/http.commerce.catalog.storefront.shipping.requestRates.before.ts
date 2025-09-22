import { Callback, HttpContext } from "../arcTypes";
import { RateRequest } from "@kibocommerce/rest-sdk/clients/ShippingStorefront/models";

function httpCommerceCatalogStorefrontShippingRequestRatesBefore(context:HttpContext<RateRequest>, callback: Callback) {
    console.log("http.commerce.catalog.storefront.shipping.requestRates.before");
}

export default httpCommerceCatalogStorefrontShippingRequestRatesBefore