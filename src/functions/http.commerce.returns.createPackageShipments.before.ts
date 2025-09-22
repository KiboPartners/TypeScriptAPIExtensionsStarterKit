import { Callback, HttpContext } from "../arcTypes";

function httpCommerceReturnsCreatePackageShipmentsBefore(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.returns.createPackageShipments.before");
}

export default httpCommerceReturnsCreatePackageShipmentsBefore