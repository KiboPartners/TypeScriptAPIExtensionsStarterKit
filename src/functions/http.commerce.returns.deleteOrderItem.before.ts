import { Callback, HttpContext } from "../arcTypes";

function httpCommerceReturnsDeleteOrderItemBefore(context:HttpContext, callback: Callback) {
    console.log("http.commerce.returns.deleteOrderItem.before");
}

export default httpCommerceReturnsDeleteOrderItemBefore