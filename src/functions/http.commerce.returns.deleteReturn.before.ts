import { Callback, HttpContext } from "../arcTypes";

function httpCommerceReturnsDeleteReturnBefore(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.returns.deleteReturn.before");
}

export default httpCommerceReturnsDeleteReturnBefore