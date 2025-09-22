import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerCreditsAddCreditBefore(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.customer.credits.addCredit.before");
}

export default httpCommerceCustomerCreditsAddCreditBefore