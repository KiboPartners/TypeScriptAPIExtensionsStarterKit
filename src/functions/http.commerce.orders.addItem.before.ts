import { Callback, HttpContext } from "../arcTypes";

function httpCommerceOrdersAddItemBefore(context:HttpContext, callback: Callback) {
    console.log("http.commerce.orders.addItem.before");
}

export default httpCommerceOrdersAddItemBefore