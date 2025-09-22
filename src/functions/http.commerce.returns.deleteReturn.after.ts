import { Callback, HttpContext } from "../arcTypes";

import { Return } from "@kibocommerce/rest-sdk/clients/Commerce/models";

function httpCommerceReturnsDeleteReturnAfter(context:HttpContext<Return>, callback: Callback) {
    console.log("http.commerce.returns.deleteReturn.after");
}

export default httpCommerceReturnsDeleteReturnAfter