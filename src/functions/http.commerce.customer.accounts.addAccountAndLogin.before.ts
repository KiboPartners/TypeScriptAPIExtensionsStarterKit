import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerAccountsAddAccountAndLoginBefore(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.customer.accounts.addAccountAndLogin.before");
}

export default httpCommerceCustomerAccountsAddAccountAndLoginBefore