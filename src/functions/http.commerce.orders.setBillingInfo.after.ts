import { Callback, HttpContext } from "../arcTypes";
import { BillingInfo } from "@kibocommerce/rest-sdk/clients/Commerce/models";

function httpCommerceOrdersSetBillingInfoAfter(context:HttpContext<BillingInfo>, callback: Callback) {
    console.log("http.commerce.orders.setBillingInfo.after");
}

export default httpCommerceOrdersSetBillingInfoAfter