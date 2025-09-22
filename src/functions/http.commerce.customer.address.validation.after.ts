import { Callback, HttpContext } from "../arcTypes";

import { AddressValidationRequest, AddressValidationResponse } from "@kibocommerce/rest-sdk/clients/Customer/models";

function httpCommerceCustomerAddressValidationAfter(context:HttpContext<AddressValidationRequest,AddressValidationResponse>, callback: Callback) {
    console.log("http.commerce.customer.address.validation.after");
}

export default httpCommerceCustomerAddressValidationAfter