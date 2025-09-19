import { Callback, EmbeddedCommerceOrdersDeleteItemBeforeContext } from "../arcTypes";

function embeddedCommerceOrdersDeleteItemBefore(context: EmbeddedCommerceOrdersDeleteItemBeforeContext, callback: Callback) {
    console.log("embedded.commerce.orders.deleteItem.before");
}

export default embeddedCommerceOrdersDeleteItemBefore
