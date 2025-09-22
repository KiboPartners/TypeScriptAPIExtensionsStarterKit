import { AuditRecord } from "@kibocommerce/rest-sdk/clients/Commerce/models";
import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCustomerCreditsGetAuditEntriesBefore(context:HttpContext<AuditRecord>, callback: Callback) {
    console.log("http.commerce.customer.credits.getAuditEntries.before");
}

export default httpCommerceCustomerCreditsGetAuditEntriesBefore