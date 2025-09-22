import { Callback, HttpContext } from "../arcTypes";

import {PasswordInfo, CustomerAuthTicket} from "@kibocommerce/rest-sdk/clients/Customer"

function httpCommerceCustomerAuthTicketsCreateUserAuthTicketAfter(context:HttpContext<PasswordInfo,CustomerAuthTicket>, callback: Callback) {
    console.log("http.commerce.customer.authTickets.createUserAuthTicket.after");
}

export default httpCommerceCustomerAuthTicketsCreateUserAuthTicketAfter