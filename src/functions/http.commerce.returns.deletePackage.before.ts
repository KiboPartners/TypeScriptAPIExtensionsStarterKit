import { Callback, HttpContext } from "../arcTypes";

function httpCommerceReturnsDeletePackageBefore(context:HttpContext, callback: Callback) {
    console.log("http.commerce.returns.deletePackage.before");
}

export default httpCommerceReturnsDeletePackageBefore