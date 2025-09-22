import { Callback, HttpContext } from "../arcTypes";

import { ChangePasswordResult, PasswordInfo} from "@kibocommerce/rest-sdk/clients/Customer"

function httpCommerceCustomerAccountsUpdateForgottenPasswordAfter(context:HttpContext<PasswordInfo,ChangePasswordResult>, callback: Callback) {
    console.log("http.commerce.customer.accounts.updateForgottenPassword.after");
}

export default httpCommerceCustomerAccountsUpdateForgottenPasswordAfter