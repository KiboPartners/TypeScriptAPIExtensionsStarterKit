import { Callback, HttpContext } from "../arcTypes";
import { Shipment } from "@kibocommerce/rest-sdk/clients/Fulfillment/models";

function httpCommerceFulfillmentGetShipmentBefore(context:HttpContext<Shipment>, callback: Callback) {
    console.log("http.commerce.fulfillment.getShipment.before");
}

export default httpCommerceFulfillmentGetShipmentBefore