import { Callback, HttpContext } from "../arcTypes";

function httpCommerceFulfillmentReassignshipmentBefore(context: HttpContext<any>, callback: Callback) {
    console.log("http.commerce.fulfillment.reassignShipment.before");
}

export default httpCommerceFulfillmentReassignshipmentBefore;