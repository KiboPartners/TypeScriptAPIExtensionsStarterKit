import { Callback, HttpContext } from "../arcTypes";
import { Shipment } from "@kibocommerce/rest-sdk/clients/Fulfillment/models";

function httpCommerceFulfillmentGetShipmentAfter(context:HttpContext<Shipment>, callback: Callback) {
    console.log("http.commerce.fulfillment.getShipment.after");
}

export default httpCommerceFulfillmentGetShipmentAfter