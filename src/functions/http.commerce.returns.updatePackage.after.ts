import { Callback, HttpContext } from "../arcTypes";

import { Package } from "@kibocommerce/rest-sdk/clients/Commerce/models";

function httpCommerceReturnsUpdatePackageAfter(context:HttpContext<Package>, callback: Callback) {
    console.log("http.commerce.returns.updatePackage.after");
}

export default httpCommerceReturnsUpdatePackageAfter