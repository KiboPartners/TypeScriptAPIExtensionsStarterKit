import { Callback, HttpContext } from "../arcTypes";

import {CustomerAccountAndAuthInfo, CustomerAuthTicket} from "@kibocommerce/rest-sdk/clients/Customer"

function httpCommerceCustomerAccountsAddAccountAndLoginBefore(context:HttpContext<CustomerAccountAndAuthInfo, CustomerAuthTicket>, callback: Callback) {
    console.log("http.commerce.customer.accounts.addAccountAndLogin.before");
}

export default httpCommerceCustomerAccountsAddAccountAndLoginBefore