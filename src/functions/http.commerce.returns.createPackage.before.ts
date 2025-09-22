import { Callback, HttpContext } from "../arcTypes";

function httpCommerceReturnsCreatePackageBefore(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.returns.createPackage.before");
}

export default httpCommerceReturnsCreatePackageBefore