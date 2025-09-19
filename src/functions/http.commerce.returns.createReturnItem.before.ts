import { Callback, HttpContext } from "../arcTypes";

function httpCommerceReturnsCreateReturnItemBefore(context:HttpContext, callback: Callback) {
    console.log("http.commerce.returns.createReturnItem.before");
}

export default httpCommerceReturnsCreateReturnItemBefore