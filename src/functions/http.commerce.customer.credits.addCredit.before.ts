import { Callback, HttpContext } from "../arcTypes";

import { Credit } from "@kibocommerce/rest-sdk/clients/Customer/models";

function httpCommerceCustomerCreditsAddCreditBefore(context:HttpContext<Credit>, callback: Callback) {
    console.log("http.commerce.customer.credits.addCredit.before");
}

export default httpCommerceCustomerCreditsAddCreditBefore