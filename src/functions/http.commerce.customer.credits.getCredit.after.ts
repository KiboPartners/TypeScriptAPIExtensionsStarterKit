import { Credit } from "@kibocommerce/rest-sdk/clients/Commerce/models";
import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerCreditsGetCreditAfter(context:HttpContext<any, Credit>, callback: Callback) {
    console.log("http.commerce.customer.credits.getCredit.after");
}

export default httpCommerceCustomerCreditsGetCreditAfter