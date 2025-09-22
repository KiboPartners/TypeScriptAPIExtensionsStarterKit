import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerCreditsGetCreditsBefore(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.customer.credits.getCredits.before");
}

export default httpCommerceCustomerCreditsGetCreditsBefore