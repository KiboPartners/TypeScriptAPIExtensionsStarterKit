import { Callback, HttpContext } from "../arcTypes";

import { OrderItem } from "@kibocommerce/rest-sdk/clients/Commerce/models";

function httpCommerceReturnsDeleteOrderItemAfter(context:HttpContext<OrderItem>, callback: Callback) {
    console.log("http.commerce.returns.deleteOrderItem.after");
}

export default httpCommerceReturnsDeleteOrderItemAfter