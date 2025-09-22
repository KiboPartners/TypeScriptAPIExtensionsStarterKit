import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerCreditsGetAuditEntriesBefore(context:HttpContext<any>, callback: Callback) {
    console.log("http.commerce.customer.credits.getAuditEntries.before");
}

export default httpCommerceCustomerCreditsGetAuditEntriesBefore