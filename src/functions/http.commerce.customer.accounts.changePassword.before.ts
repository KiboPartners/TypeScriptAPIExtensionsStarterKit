import { Callback, HttpContext } from "../arcTypes";

import { ChangePasswordResult, PasswordInfo} from "@kibocommerce/rest-sdk/clients/Customer"

function httpCommerceCustomerAccountsChangePasswordBefore(context:HttpContext<PasswordInfo, ChangePasswordResult>, callback: Callback) {
    console.log("http.commerce.customer.accounts.changePassword.before");
}

export default httpCommerceCustomerAccountsChangePasswordBefore