import { Credit } from "@kibocommerce/rest-sdk/clients/Commerce/models";
import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerCreditsUpdateCreditBefore(context:HttpContext<Credit>, callback: Callback) {
    console.log("http.commerce.customer.credits.updateCredit.before");
}

export default httpCommerceCustomerCreditsUpdateCreditBefore