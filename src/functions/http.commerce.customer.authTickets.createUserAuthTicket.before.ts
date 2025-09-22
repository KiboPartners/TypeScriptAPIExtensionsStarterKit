import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerAuthTicketsCreateUserAuthTicketBefore(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.customer.authTickets.createUserAuthTicket.before");
}

export default httpCommerceCustomerAuthTicketsCreateUserAuthTicketBefore