import { Credit } from "@kibocommerce/rest-sdk/clients/Commerce/models";
import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerCreditsGetCreditsAfter(context:HttpContext<any, Credit[]>, callback: Callback) {
    console.log("http.commerce.customer.credits.getCredits.after");
}

export default httpCommerceCustomerCreditsGetCreditsAfter