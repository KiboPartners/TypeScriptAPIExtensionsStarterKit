import { Callback, EmbeddedCommerceOrdersAddItemBeforeContext } from "../arcTypes";

function embeddedCommerceOrdersAddItemBefore(context: EmbeddedCommerceOrdersAddItemBeforeContext, callback: Callback) {
    console.log("embedded.commerce.orders.addItem.before");
}

export default embeddedCommerceOrdersAddItemBefore
