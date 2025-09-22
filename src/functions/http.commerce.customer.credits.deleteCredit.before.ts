import { Credit } from "@kibocommerce/rest-sdk/clients/Commerce/models";
import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerCreditsDeleteCreditBefore(context:HttpContext<Credit>, callback: Callback) {
    console.log("http.commerce.customer.credits.deleteCredit.before");
}

export default httpCommerceCustomerCreditsDeleteCreditBefore