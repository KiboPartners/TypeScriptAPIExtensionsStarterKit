import { Credit } from "@kibocommerce/rest-sdk/clients/Commerce/models";
import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerCreditsUpdateCreditAfter(context:HttpContext<Credit>, callback: Callback) {
    console.log("http.commerce.customer.credits.updateCredit.after");
}

export default httpCommerceCustomerCreditsUpdateCreditAfter