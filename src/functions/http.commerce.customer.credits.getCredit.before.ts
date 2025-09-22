import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerCreditsGetCreditBefore(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.customer.credits.getCredit.before");
}

export default httpCommerceCustomerCreditsGetCreditBefore