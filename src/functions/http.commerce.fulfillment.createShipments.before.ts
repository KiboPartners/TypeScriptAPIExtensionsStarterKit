import { Callback, HttpContext } from "../arcTypes";

function httpCommerceFulfillmentCreateShipmentsBefore(context:HttpContext, callback: Callback) {
    console.log("http.commerce.fulfillment.createShipments.before");
}

export default httpCommerceFulfillmentCreateShipmentsBefore