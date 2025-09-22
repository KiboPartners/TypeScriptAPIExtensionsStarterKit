import { Callback, HttpContext } from "../arcTypes";

import { ChangePasswordResult, PasswordInfo} from "@kibocommerce/rest-sdk/clients/Customer"

function httpCommerceCustomerAccountsChangePasswordAfter(context:HttpContext<PasswordInfo, ChangePasswordResult>, callback: Callback) {
    console.log("http.commerce.customer.accounts.changePassword.after");
}

export default httpCommerceCustomerAccountsChangePasswordAfter