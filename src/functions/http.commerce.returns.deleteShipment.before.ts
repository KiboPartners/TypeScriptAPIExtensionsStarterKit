import { Callback, HttpContext } from "../arcTypes";

import {Shipment} from "@kibocommerce/rest-sdk/clients/Commerce/models";

function httpCommerceReturnsDeleteShipmentBefore(context:HttpContext<Shipment>, callback: Callback) {
    console.log("http.commerce.returns.deleteShipment.before");
}

export default httpCommerceReturnsDeleteShipmentBefore