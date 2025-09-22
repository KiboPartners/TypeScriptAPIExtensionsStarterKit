import { Credit } from "@kibocommerce/rest-sdk/clients/Commerce/models";
import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerCreditsAssociateCreditToShopperAfter(context:HttpContext<Credit>, callback: Callback) {
    console.log("http.commerce.customer.credits.associateCreditToShopper.after");
}

export default httpCommerceCustomerCreditsAssociateCreditToShopperAfter