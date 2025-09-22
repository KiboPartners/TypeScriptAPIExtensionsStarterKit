import { Callback, HttpContext } from "../arcTypes";

import { Package } from "@kibocommerce/rest-sdk/clients/Commerce/models";

function httpCommerceReturnsDeletePackageBefore(context:HttpContext<Package>, callback: Callback) {
    console.log("http.commerce.returns.deletePackage.before");
}

export default httpCommerceReturnsDeletePackageBefore