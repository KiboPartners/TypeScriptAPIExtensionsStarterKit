import { Callback, HttpContext } from "../arcTypes";

import { Return } from "@kibocommerce/rest-sdk/clients/Commerce/models";

function httpCommerceReturnsDeleteReturnBefore(context:HttpContext<Return>, callback: Callback) {
    console.log("http.commerce.returns.deleteReturn.before");
}

export default httpCommerceReturnsDeleteReturnBefore