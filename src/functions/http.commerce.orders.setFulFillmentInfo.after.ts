import { Callback, HttpContext } from "../arcTypes";

function httpCommerceOrdersSetFulFillmentInfoAfter(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.orders.setFulFillmentInfo.after");
}

export default httpCommerceOrdersSetFulFillmentInfoAfter