import { Callback, HttpContext } from "../arcTypes";

import { FulfillmentInfo } from "@kibocommerce/rest-sdk/clients/Commerce/models";

function httpCommerceOrdersSetFulFillmentInfoAfter(context:HttpContext<FulfillmentInfo>, callback: Callback) {
    console.log("http.commerce.orders.setFulFillmentInfo.after");
}

export default httpCommerceOrdersSetFulFillmentInfoAfter