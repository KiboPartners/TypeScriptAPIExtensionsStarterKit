import { Callback, HttpContext } from "../arcTypes";
import { Shipment } from "@kibocommerce/rest-sdk/clients/Fulfillment/models";

function httpCommerceFulfillmentGetShipmentsBefore(context:HttpContext<Shipment[]>, callback: Callback) {
    console.log("http.commerce.fulfillment.getShipments.before");
}

export default httpCommerceFulfillmentGetShipmentsBefore