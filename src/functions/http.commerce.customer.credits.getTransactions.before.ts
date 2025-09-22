import { Transaction } from "@kibocommerce/rest-sdk/clients/Customer";
import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerCreditsGetTransactionsBefore(context:HttpContext<any, Transaction[]>, callback: Callback) {
    console.log("http.commerce.customer.credits.getTransactions.before");
}

export default httpCommerceCustomerCreditsGetTransactionsBefore