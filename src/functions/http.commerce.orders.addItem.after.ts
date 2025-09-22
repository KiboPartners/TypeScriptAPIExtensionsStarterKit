import { Callback, HttpContext } from "../arcTypes";
import { OrderItem } from "@kibocommerce/rest-sdk/clients/Commerce/models";

function httpCommerceOrdersAddItemAfter(context:HttpContext<OrderItem>, callback: Callback) {
    console.log("http.commerce.orders.addItem.after");
}

export default httpCommerceOrdersAddItemAfter