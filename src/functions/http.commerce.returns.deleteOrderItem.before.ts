import { Callback, HttpContext } from "../arcTypes";

import { OrderItem } from "@kibocommerce/rest-sdk/clients/Commerce/models";

function httpCommerceReturnsDeleteOrderItemBefore(context:HttpContext<OrderItem>, callback: Callback) {
    console.log("http.commerce.returns.deleteOrderItem.before");
}

export default httpCommerceReturnsDeleteOrderItemBefore