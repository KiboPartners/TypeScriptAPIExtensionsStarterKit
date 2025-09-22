import { Callback, HttpContext } from "../arcTypes";

function httpCommerceReturnsUpdatePackageAfter(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.returns.updatePackage.after");
}

export default httpCommerceReturnsUpdatePackageAfter