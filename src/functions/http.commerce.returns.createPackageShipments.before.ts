import { Callback, HttpContext } from "../arcTypes";

import { Package } from "@kibocommerce/rest-sdk/clients/Fulfillment/models";

function httpCommerceReturnsCreatePackageShipmentsBefore(context:HttpContext<Package>, callback: Callback) {
    console.log("http.commerce.returns.createPackageShipments.before");
}

export default httpCommerceReturnsCreatePackageShipmentsBefore