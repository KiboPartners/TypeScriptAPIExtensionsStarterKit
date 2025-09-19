import { Callback } from "../arcTypes";

function embeddedCommerceOrdersActionBefore(context:any, callback: Callback) {
    console.log("embedded.commerce.orders.action.before");
}

export default embeddedCommerceOrdersActionBefore