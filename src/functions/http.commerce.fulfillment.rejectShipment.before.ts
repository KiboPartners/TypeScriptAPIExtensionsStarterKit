import { Callback, HttpContext } from "../arcTypes";

function httpCommerceFulfillmentRejectshipmentBefore(context: HttpContext<any>, callback: Callback) {
    console.log("http.commerce.fulfillment.rejectShipment.before");
}

export default httpCommerceFulfillmentRejectshipmentBefore;