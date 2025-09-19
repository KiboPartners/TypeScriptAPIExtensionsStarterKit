import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerAccountsAddAccountBefore(context:HttpContext, callback: Callback) {
    console.log("http.commerce.customer.accounts.addAccount.before");
}

export default httpCommerceCustomerAccountsAddAccountBefore