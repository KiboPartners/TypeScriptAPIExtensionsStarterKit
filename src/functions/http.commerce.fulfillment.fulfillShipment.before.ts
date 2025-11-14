import { Callback, HttpContext } from "../arcTypes";
import { Shipment } from "@kibocommerce/rest-sdk/clients/Fulfillment/models";

function httpCommerceFulfillmentFulfillShipmentBefore(context:HttpContext<Shipment>, callback: Callback) {
    console.log("http.commerce.fulfillment.fulfillShipment.before");
}

export default httpCommerceFulfillmentFulfillShipmentBefore