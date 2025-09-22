import { Callback, HttpContext } from "../arcTypes";

import { CustomerAccount } from "@kibocommerce/rest-sdk/clients/Customer/models";

function httpCommerceCustomerAccountsUpdateAccountAfter(context:HttpContext<CustomerAccount>, callback: Callback) {
    console.log("http.commerce.customer.accounts.updateAccount.after");
}

export default httpCommerceCustomerAccountsUpdateAccountAfter