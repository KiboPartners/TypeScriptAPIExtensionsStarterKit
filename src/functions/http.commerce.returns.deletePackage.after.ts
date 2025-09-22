import { Callback, HttpContext } from "../arcTypes";

import { Package } from "@kibocommerce/rest-sdk/clients/Commerce/models";

function httpCommerceReturnsDeletePackageAfter(context:HttpContext<Package>, callback: Callback) {
    console.log("http.commerce.returns.deletePackage.after");
}

export default httpCommerceReturnsDeletePackageAfter