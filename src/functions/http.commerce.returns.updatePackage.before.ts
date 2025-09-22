import { Callback, HttpContext } from "../arcTypes";

import { Package } from "@kibocommerce/rest-sdk/clients/Commerce/models";

function httpCommerceReturnsUpdatePackageBefore(context:HttpContext<Package>, callback: Callback) {
    console.log("http.commerce.returns.updatePackage.before");
}

export default httpCommerceReturnsUpdatePackageBefore