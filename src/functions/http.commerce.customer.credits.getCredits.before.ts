import { Callback, HttpContext } from "../arcTypes";

import { Credit } from "@kibocommerce/rest-sdk/clients/Commerce/models";

function httpCommerceCustomerCreditsGetCreditsBefore(context:HttpContext<any, Credit[]>, callback: Callback) {
    console.log("http.commerce.customer.credits.getCredits.before");
}

export default httpCommerceCustomerCreditsGetCreditsBefore