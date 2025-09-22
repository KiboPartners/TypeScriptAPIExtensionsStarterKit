import { Callback, HttpContext } from "../arcTypes";

function httpCommerceReturnsDeleteShipmentAfter(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.returns.deleteShipment.after");
}

export default httpCommerceReturnsDeleteShipmentAfter