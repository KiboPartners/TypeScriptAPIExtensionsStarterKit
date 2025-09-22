import { Callback, HttpContext } from "../arcTypes";
import { CustomerAccount } from "@kibocommerce/rest-sdk/clients/Customer/models";

function httpCommerceCustomerAccountsAddAccountAfter(context:HttpContext<CustomerAccount>, callback: Callback) {
    console.log("http.commerce.customer.accounts.addAccount.after");
}

export default httpCommerceCustomerAccountsAddAccountAfter