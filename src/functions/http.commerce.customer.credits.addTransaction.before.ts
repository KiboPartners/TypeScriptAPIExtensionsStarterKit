import { Callback, HttpContext } from "../arcTypes";

import { Transaction } from "@kibocommerce/rest-sdk/clients/Customer/models";

function httpCommerceCustomerCreditsAddTransactionBefore(context:HttpContext<Transaction>, callback: Callback) {
    console.log("http.commerce.customer.credits.addTransaction.before");
}

export default httpCommerceCustomerCreditsAddTransactionBefore