import { Callback, HttpContext } from "../arcTypes";
import { Shipment } from "@kibocommerce/rest-sdk/clients/Fulfillment/models";

function httpCommerceFulfillmentCreateShipmentsAfter(context:HttpContext<Shipment[]>, callback: Callback) {
    console.log("http.commerce.fulfillment.createShipments.after");
}

export default httpCommerceFulfillmentCreateShipmentsAfter