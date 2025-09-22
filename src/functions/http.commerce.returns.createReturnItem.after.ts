import { Callback, HttpContext } from "../arcTypes";

function httpCommerceReturnsCreateReturnItemAfter(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.returns.createReturnItem.after");
}

export default httpCommerceReturnsCreateReturnItemAfter