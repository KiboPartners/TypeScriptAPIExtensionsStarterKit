import { Callback, HttpContext } from "../arcTypes";

import { AddressValidationRequest, AddressValidationResponse } from "@kibocommerce/rest-sdk/clients/Customer/models";

function httpCommerceCustomerAddressValidationBefore(context:HttpContext<AddressValidationRequest,AddressValidationResponse>, callback: Callback) {
    console.log("http.commerce.customer.address.validation.before");
}

export default httpCommerceCustomerAddressValidationBefore