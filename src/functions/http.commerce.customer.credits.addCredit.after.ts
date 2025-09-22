import { Callback, HttpContext } from "../arcTypes";

import { Credit } from "@kibocommerce/rest-sdk/clients/Customer/models";

function httpCommerceCustomerCreditsAddCreditAfter(context:HttpContext<Credit>, callback: Callback) {
    console.log("http.commerce.customer.credits.addCredit.after");
}

export default httpCommerceCustomerCreditsAddCreditAfter