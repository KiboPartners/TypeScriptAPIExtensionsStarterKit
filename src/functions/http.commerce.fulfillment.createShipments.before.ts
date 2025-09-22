import { Callback, HttpContext } from "../arcTypes";
import { FulfillmentInfo } from "@kibocommerce/rest-sdk/clients/Commerce/models";

function httpCommerceFulfillmentCreateShipmentsBefore(context:HttpContext<FulfillmentInfo>, callback: Callback) {
    console.log("http.commerce.fulfillment.createShipments.before");
}

export default httpCommerceFulfillmentCreateShipmentsBefore