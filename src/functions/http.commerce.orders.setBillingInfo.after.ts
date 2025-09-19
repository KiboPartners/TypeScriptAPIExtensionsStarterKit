import { Callback, HttpContext } from "../arcTypes";

function httpCommerceOrdersSetBillingInfoAfter(context:HttpContext, callback: Callback) {
    console.log("http.commerce.orders.setBillingInfo.after");
}

export default httpCommerceOrdersSetBillingInfoAfter