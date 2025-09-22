import { Callback, HttpContext } from "../arcTypes";

import { ReturnItem } from "@kibocommerce/rest-sdk/clients/Commerce/models";

function httpCommerceReturnsCreateReturnItemAfter(context:HttpContext<ReturnItem>, callback: Callback) {
    console.log("http.commerce.returns.createReturnItem.after");
}

export default httpCommerceReturnsCreateReturnItemAfter