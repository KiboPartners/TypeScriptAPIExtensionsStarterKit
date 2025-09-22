import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerCreditsGetTransactionsBefore(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.customer.credits.getTransactions.before");
}

export default httpCommerceCustomerCreditsGetTransactionsBefore