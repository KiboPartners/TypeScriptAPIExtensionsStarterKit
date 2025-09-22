import { Callback, HttpContext } from "../arcTypes";

import { Package } from "@kibocommerce/rest-sdk/clients/Fulfillment/models";

function httpCommerceReturnsCreatePackageShipmentsAfter(context:HttpContext<Package>, callback: Callback) {
    console.log("http.commerce.returns.createPackageShipments.after");
}

export default httpCommerceReturnsCreatePackageShipmentsAfter