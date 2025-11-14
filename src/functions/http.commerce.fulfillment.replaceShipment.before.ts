import { Callback, HttpContext } from "../arcTypes";

function httpCommerceFulfillmentReplaceshipmentBefore(context: HttpContext<any>, callback: Callback) {
    console.log("http.commerce.fulfillment.replaceShipment.before");
}

export default httpCommerceFulfillmentReplaceshipmentBefore;