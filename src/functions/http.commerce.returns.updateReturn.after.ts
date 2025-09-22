import { Callback, HttpContext } from "../arcTypes";

import { Return } from "@kibocommerce/rest-sdk/clients/Commerce/models";

function httpCommerceReturnsUpdateReturnAfter(context:HttpContext<Return>, callback: Callback) {
    console.log("http.commerce.returns.updateReturn.after");
}

export default httpCommerceReturnsUpdateReturnAfter