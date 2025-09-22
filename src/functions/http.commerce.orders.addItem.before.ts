import { Callback, HttpContext } from "../arcTypes";

import { OrderItem } from "@kibocommerce/rest-sdk/clients/Commerce/models";

function httpCommerceOrdersAddItemBefore(context:HttpContext<OrderItem>, callback: Callback) {
    console.log("http.commerce.orders.addItem.before");
}

export default httpCommerceOrdersAddItemBefore