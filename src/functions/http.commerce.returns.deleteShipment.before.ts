import { Callback, HttpContext } from "../arcTypes";

function httpCommerceReturnsDeleteShipmentBefore(context:HttpContext, callback: Callback) {
    console.log("http.commerce.returns.deleteShipment.before");
}

export default httpCommerceReturnsDeleteShipmentBefore