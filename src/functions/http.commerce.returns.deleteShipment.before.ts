import { Callback, HttpContext } from "../arcTypes";

function httpCommerceReturnsDeleteShipmentBefore(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.returns.deleteShipment.before");
}

export default httpCommerceReturnsDeleteShipmentBefore