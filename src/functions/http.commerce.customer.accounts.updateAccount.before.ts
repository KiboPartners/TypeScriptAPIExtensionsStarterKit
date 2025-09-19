import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerAccountsUpdateAccountBefore(context:HttpContext, callback: Callback) {
    console.log("http.commerce.customer.accounts.updateAccount.before");
}

export default httpCommerceCustomerAccountsUpdateAccountBefore