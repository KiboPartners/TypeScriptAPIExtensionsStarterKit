import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerAddressValidationAfter(context:HttpContext, callback: Callback) {
    console.log("http.commerce.customer.address.validation.after");
}

export default httpCommerceCustomerAddressValidationAfter