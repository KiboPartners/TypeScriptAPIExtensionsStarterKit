import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerAddressValidationBefore(context:HttpContext, callback: Callback) {
    console.log("http.commerce.customer.address.validation.before");
}

export default httpCommerceCustomerAddressValidationBefore