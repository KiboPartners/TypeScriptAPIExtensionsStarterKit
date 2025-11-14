import { Callback, HttpContext } from "../arcTypes";
import { Shipment } from "@kibocommerce/rest-sdk/clients/Fulfillment/models";

function httpCommerceFulfillmentGetShipmentsAfter(context:HttpContext<Shipment[]>, callback: Callback) {
    console.log("http.commerce.fulfillment.getShipments.after");
}

export default httpCommerceFulfillmentGetShipmentsAfter