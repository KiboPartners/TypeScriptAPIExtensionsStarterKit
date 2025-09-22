import { Callback, HttpContext } from "../arcTypes";

function httpCommerceReturnsDeleteReturnAfter(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.returns.deleteReturn.after");
}

export default httpCommerceReturnsDeleteReturnAfter