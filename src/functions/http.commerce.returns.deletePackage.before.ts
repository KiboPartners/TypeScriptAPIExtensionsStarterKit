import { Callback, HttpContext } from "../arcTypes";

function httpCommerceReturnsDeletePackageBefore(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.returns.deletePackage.before");
}

export default httpCommerceReturnsDeletePackageBefore