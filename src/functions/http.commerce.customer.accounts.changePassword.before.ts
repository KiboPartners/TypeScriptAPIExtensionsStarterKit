import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerAccountsChangePasswordBefore(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.customer.accounts.changePassword.before");
}

export default httpCommerceCustomerAccountsChangePasswordBefore