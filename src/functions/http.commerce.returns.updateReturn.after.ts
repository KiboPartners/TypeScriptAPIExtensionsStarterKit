import { Callback, HttpContext } from "../arcTypes";

function httpCommerceReturnsUpdateReturnAfter(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.returns.updateReturn.after");
}

export default httpCommerceReturnsUpdateReturnAfter