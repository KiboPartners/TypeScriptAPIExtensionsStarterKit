import { Callback, HttpContext } from "../arcTypes";

import {Shipment} from "@kibocommerce/rest-sdk/clients/Commerce/models";

function httpCommerceReturnsDeleteShipmentAfter(context:HttpContext<Shipment>, callback: Callback) {
    console.log("http.commerce.returns.deleteShipment.after");
}

export default httpCommerceReturnsDeleteShipmentAfter