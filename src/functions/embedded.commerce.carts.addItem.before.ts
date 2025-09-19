import { Callback, EmbeddedCommerceCartsAddItemBeforeContext } from "../arcTypes";

function embeddedCommerceCartsAddItemBefore(context: EmbeddedCommerceCartsAddItemBeforeContext, callback: Callback) {
    console.log("embedded.commerce.carts.addItem.before");
}

export default embeddedCommerceCartsAddItemBefore
