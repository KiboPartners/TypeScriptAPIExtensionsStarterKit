import { Callback, HttpContext } from "../arcTypes";

import {CustomerAccountAndAuthInfo, CustomerAuthTicket} from "@kibocommerce/rest-sdk/clients/Customer"

function httpCommerceCustomerAccountsAddAccountAndLoginAfter(context:HttpContext<CustomerAccountAndAuthInfo,CustomerAuthTicket>, callback: Callback) {
    console.log("http.commerce.customer.accounts.addAccountAndLogin.after");
}

export default httpCommerceCustomerAccountsAddAccountAndLoginAfter