import { Callback, HttpContext } from "../arcTypes";

function httpCommerceOrdersSetFulFillmentInfoBefore(context:HttpContext, callback: Callback) {
    console.log("http.commerce.orders.setFulFillmentInfo.before");
}

export default httpCommerceOrdersSetFulFillmentInfoBefore