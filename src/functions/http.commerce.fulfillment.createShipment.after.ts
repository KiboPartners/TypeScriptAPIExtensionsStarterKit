import { Callback, HttpContext } from "../arcTypes";
import { Shipment } from "@kibocommerce/rest-sdk/clients/Fulfillment/models";

function httpCommerceFulfillmentCreateShipmentAfter(context:HttpContext<Shipment>, callback: Callback) {
    console.log("http.commerce.fulfillment.createShipment.after");
}

export default httpCommerceFulfillmentCreateShipmentAfter