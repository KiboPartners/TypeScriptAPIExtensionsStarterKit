import { Credit } from "@kibocommerce/rest-sdk/clients/Commerce/models";
import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerCreditsGetCreditBefore(context:HttpContext<any, Credit>, callback: Callback) {
    console.log("http.commerce.customer.credits.getCredit.before");
}

export default httpCommerceCustomerCreditsGetCreditBefore