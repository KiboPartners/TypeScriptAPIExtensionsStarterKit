import { Callback, HttpContext } from "../arcTypes";
import { CustomerAccount } from "@kibocommerce/rest-sdk/clients/Customer/models";

function httpCommerceCustomerAccountsAddAccountBefore(context:HttpContext<CustomerAccount>, callback: Callback) {
    console.log("http.commerce.customer.accounts.addAccount.before");
}

export default httpCommerceCustomerAccountsAddAccountBefore