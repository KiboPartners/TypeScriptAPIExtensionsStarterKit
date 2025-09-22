import { Package } from "@kibocommerce/rest-sdk/clients/Fulfillment/models";
import { Callback, HttpContext } from "../arcTypes";

function httpCommerceReturnsCreatePackageAfter(context:HttpContext<Package>, callback: Callback) {
    console.log("http.commerce.returns.createPackage.after");
}

export default httpCommerceReturnsCreatePackageAfter