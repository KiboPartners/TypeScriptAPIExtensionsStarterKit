import { Callback, HttpContext } from "../arcTypes";

function httpCommerceFulfillmentRejectshipmentAfter(context: HttpContext<any>, callback: Callback) {
    console.log("http.commerce.fulfillment.rejectShipment.after");
}

export default httpCommerceFulfillmentRejectshipmentAfter;