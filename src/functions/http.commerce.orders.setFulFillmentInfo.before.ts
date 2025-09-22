import { Callback, HttpContext } from "../arcTypes";

import { FulfillmentInfo } from "@kibocommerce/rest-sdk/clients/Commerce/models";

function httpCommerceOrdersSetFulFillmentInfoBefore(context:HttpContext<FulfillmentInfo>, callback: Callback) {
    console.log("http.commerce.orders.setFulFillmentInfo.before");
}

export default httpCommerceOrdersSetFulFillmentInfoBefore