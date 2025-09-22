import { Callback, HttpContext } from "../arcTypes";

import { Transaction } from "@kibocommerce/rest-sdk/clients/Customer/models";

function httpCommerceCustomerCreditsAddTransactionAfter(context:HttpContext<Transaction>, callback: Callback) {
    console.log("http.commerce.customer.credits.addTransaction.after");
}

export default httpCommerceCustomerCreditsAddTransactionAfter