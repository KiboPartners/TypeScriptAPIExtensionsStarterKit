import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerCreditsAddTransactionBefore(context:HttpContext, callback: Callback) {
    console.log("http.commerce.customer.credits.addTransaction.before");
}

export default httpCommerceCustomerCreditsAddTransactionBefore