import { Callback, HttpContext } from "../arcTypes";

import { CustomerAccount } from "@kibocommerce/rest-sdk/clients/Customer/models";

function httpCommerceCustomerAccountsUpdateAccountBefore(context:HttpContext<CustomerAccount>, callback: Callback) {
    console.log("http.commerce.customer.accounts.updateAccount.before");
}

export default httpCommerceCustomerAccountsUpdateAccountBefore