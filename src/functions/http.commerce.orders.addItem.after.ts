import { Callback, HttpContext } from "../arcTypes";

function httpCommerceOrdersAddItemAfter(context:HttpContext, callback: Callback) {
    console.log("http.commerce.orders.addItem.after");
}

export default httpCommerceOrdersAddItemAfter