import { Callback, HttpContext } from "../arcTypes";

import { Return } from "@kibocommerce/rest-sdk/clients/Commerce/models";

function httpCommerceReturnsUpdateReturnBefore(context:HttpContext<Return>, callback: Callback) {
    console.log("http.commerce.returns.updateReturn.before");
}

export default httpCommerceReturnsUpdateReturnBefore