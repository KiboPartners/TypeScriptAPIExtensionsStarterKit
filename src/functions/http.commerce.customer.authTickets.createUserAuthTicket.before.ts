import { Callback, HttpContext } from "../arcTypes";

import {PasswordInfo, CustomerAuthTicket} from "@kibocommerce/rest-sdk/clients/Customer"

function httpCommerceCustomerAuthTicketsCreateUserAuthTicketBefore(context:HttpContext<PasswordInfo,CustomerAuthTicket>, callback: Callback) {
    console.log("http.commerce.customer.authTickets.createUserAuthTicket.before");
}

export default httpCommerceCustomerAuthTicketsCreateUserAuthTicketBefore