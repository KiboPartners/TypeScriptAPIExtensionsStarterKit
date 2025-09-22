import { Callback, HttpContext } from "../arcTypes";

import { Package } from "@kibocommerce/rest-sdk/clients/Commerce/models";

function httpCommerceReturnsCreatePackageBefore(context:HttpContext<Package>, callback: Callback) {
    console.log("http.commerce.returns.createPackage.before");
}

export default httpCommerceReturnsCreatePackageBefore