import { Callback, HttpContext } from "../arcTypes";

function httpCommerceOrdersSetBillingInfoBefore(context:HttpContext, callback: Callback) {
    console.log("http.commerce.orders.setBillingInfo.before");
}

export default httpCommerceOrdersSetBillingInfoBefore