import { Callback, HttpContext } from "../arcTypes";
import { Shipment } from "@kibocommerce/rest-sdk/clients/Fulfillment/models";

function httpCommerceFulfillmentCreateShipmentsBefore(context:HttpContext<Shipment[]>, callback: Callback) {
    console.log("http.commerce.fulfillment.createShipments.before");
}

export default httpCommerceFulfillmentCreateShipmentsBefore