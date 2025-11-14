import { Callback, HttpContext } from "../arcTypes";

function httpCommerceFulfillmentRejectshipmentitemsBefore(context: HttpContext<any>, callback: Callback) {
    console.log("http.commerce.fulfillment.rejectShipmentItems.before");
}

export default httpCommerceFulfillmentRejectshipmentitemsBefore;