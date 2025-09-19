import { Callback, HttpContext } from "../arcTypes";

function httpCommerceReturnsCreatePackageAfter(context:HttpContext, callback: Callback) {
    console.log("http.commerce.returns.createPackage.after");
}

export default httpCommerceReturnsCreatePackageAfter