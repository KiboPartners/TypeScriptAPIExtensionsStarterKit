import { Callback, HttpContext } from "../arcTypes";

function httpCommerceFulfillmentTransfershipmentBefore(context: HttpContext<any>, callback: Callback) {
    console.log("http.commerce.fulfillment.transferShipment.before");
}

export default httpCommerceFulfillmentTransfershipmentBefore;