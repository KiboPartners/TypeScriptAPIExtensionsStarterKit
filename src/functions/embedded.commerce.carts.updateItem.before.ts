import { Callback, EmbeddedCommerceCartsUpdateItemBeforeContext } from "../arcTypes";

function embeddedCommerceCartsUpdateItemBefore(context: EmbeddedCommerceCartsUpdateItemBeforeContext, callback: Callback) {
    console.log("embedded.commerce.carts.updateItem.before");
}

export default embeddedCommerceCartsUpdateItemBefore
