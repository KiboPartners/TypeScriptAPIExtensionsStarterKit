import { Callback, HttpContext } from "../arcTypes";

function httpCommerceReturnsUpdateReturnBefore(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.returns.updateReturn.before");
}

export default httpCommerceReturnsUpdateReturnBefore