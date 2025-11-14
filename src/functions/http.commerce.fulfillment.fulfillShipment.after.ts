import { Callback, HttpContext } from "../arcTypes";
import { Shipment } from "@kibocommerce/rest-sdk/clients/Fulfillment/models";

function httpCommerceFulfillmentFulfillShipmentAfter(context:HttpContext<Shipment>, callback: Callback) {
    console.log("http.commerce.fulfillment.fulfillShipment.after");
}

export default httpCommerceFulfillmentFulfillShipmentAfter