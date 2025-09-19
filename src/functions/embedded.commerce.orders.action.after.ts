import { Callback, EmbeddedCommerceOrdersActionAfterContext } from "../arcTypes";

function embeddedCommerceOrdersActionAfter(context: EmbeddedCommerceOrdersActionAfterContext, callback: Callback) {
    console.log("embedded.commerce.orders.action.after");
}

export default embeddedCommerceOrdersActionAfter
