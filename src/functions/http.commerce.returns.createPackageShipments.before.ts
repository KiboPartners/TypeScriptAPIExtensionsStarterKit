import { Callback, HttpContext } from "../arcTypes";

function httpCommerceReturnsCreatePackageShipmentsBefore(context:HttpContext, callback: Callback) {
    console.log("http.commerce.returns.createPackageShipments.before");
}

export default httpCommerceReturnsCreatePackageShipmentsBefore