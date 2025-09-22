import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerCreditsUpdateCreditBefore(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.customer.credits.updateCredit.before");
}

export default httpCommerceCustomerCreditsUpdateCreditBefore