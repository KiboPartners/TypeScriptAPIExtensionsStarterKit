import { Callback, HttpContext } from "../arcTypes";

function httpCommerceReturnsUpdatePackageAfter(context:HttpContext, callback: Callback) {
    console.log("http.commerce.returns.updatePackage.after");
}

export default httpCommerceReturnsUpdatePackageAfter