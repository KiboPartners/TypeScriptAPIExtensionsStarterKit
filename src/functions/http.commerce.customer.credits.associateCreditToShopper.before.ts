import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerCreditsAssociateCreditToShopperBefore(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.customer.credits.associateCreditToShopper.before");
}

export default httpCommerceCustomerCreditsAssociateCreditToShopperBefore