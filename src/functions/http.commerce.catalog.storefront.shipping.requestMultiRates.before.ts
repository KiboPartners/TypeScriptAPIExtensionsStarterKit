import { Callback, HttpContext } from "../arcTypes";

import {RateRequestGroup, RatesResponseGroup} from "@kibocommerce/rest-sdk/clients/ShippingStorefront"

function httpCommerceCatalogStorefrontShippingRequestMultiRatesBefore(context:HttpContext<RateRequestGroup,RatesResponseGroup>, callback: Callback) {
    console.log("http.commerce.catalog.storefront.shipping.requestMultiRates.before");
}

export default httpCommerceCatalogStorefrontShippingRequestMultiRatesBefore