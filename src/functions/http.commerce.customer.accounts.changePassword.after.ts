import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerAccountsChangePasswordAfter(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.customer.accounts.changePassword.after");
}

export default httpCommerceCustomerAccountsChangePasswordAfter