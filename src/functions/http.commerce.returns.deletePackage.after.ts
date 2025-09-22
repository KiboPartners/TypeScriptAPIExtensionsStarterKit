import { Callback, HttpContext } from "../arcTypes";

function httpCommerceReturnsDeletePackageAfter(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.returns.deletePackage.after");
}

export default httpCommerceReturnsDeletePackageAfter