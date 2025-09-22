import { Callback, HttpContext } from "../arcTypes";

import { Credit } from "@kibocommerce/rest-sdk/clients/Customer/models";

function httpCommerceCustomerCreditsAssociateCreditToShopperBefore(context:HttpContext<Credit>, callback: Callback) {
    console.log("http.commerce.customer.credits.associateCreditToShopper.before");
}

export default httpCommerceCustomerCreditsAssociateCreditToShopperBefore