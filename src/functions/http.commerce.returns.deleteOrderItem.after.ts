import { Callback, HttpContext } from "../arcTypes";

function httpCommerceReturnsDeleteOrderItemAfter(context:HttpContext, callback: Callback) {
    console.log("http.commerce.returns.deleteOrderItem.after");
}

export default httpCommerceReturnsDeleteOrderItemAfter