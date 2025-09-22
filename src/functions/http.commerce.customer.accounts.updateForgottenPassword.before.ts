import { Callback, HttpContext } from "../arcTypes";

import { ChangePasswordResult, PasswordInfo} from "@kibocommerce/rest-sdk/clients/Customer"

function httpCommerceCustomerAccountsUpdateForgottenPasswordBefore(context:HttpContext<PasswordInfo, ChangePasswordResult>, callback: Callback) {
    console.log("http.commerce.customer.accounts.updateForgottenPassword.before");
}

export default httpCommerceCustomerAccountsUpdateForgottenPasswordBefore