import { Callback, HttpContext } from "../arcTypes";
import { ReturnItem } from "@kibocommerce/rest-sdk/clients/Commerce/models";

function httpCommerceReturnsCreateReturnItemBefore(context:HttpContext<ReturnItem>, callback: Callback) {
    console.log("http.commerce.returns.createReturnItem.before");
}

export default httpCommerceReturnsCreateReturnItemBefore