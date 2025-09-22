import { Callback, HttpContext } from "../arcTypes";

function httpCommerceOrdersSetFulFillmentInfoBefore(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.orders.setFulFillmentInfo.before");
}

export default httpCommerceOrdersSetFulFillmentInfoBefore