import { Callback, HttpContext } from "../arcTypes";

function httpCommerceReturnsUpdatePackageBefore(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.returns.updatePackage.before");
}

export default httpCommerceReturnsUpdatePackageBefore