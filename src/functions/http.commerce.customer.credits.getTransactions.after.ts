import { Callback, HttpContext } from "../arcTypes";

import { Transaction } from "@kibocommerce/rest-sdk/clients/Customer";

function httpCommerceCustomerCreditsGetTransactionsAfter(context:HttpContext<any, Transaction[]>, callback: Callback) {
    console.log("http.commerce.customer.credits.getTransactions.after");
}

export default httpCommerceCustomerCreditsGetTransactionsAfter