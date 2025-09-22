import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerAddressValidationBefore(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.customer.address.validation.before");
}

export default httpCommerceCustomerAddressValidationBefore