import { Callback, EmbeddedCommerceCartsDeleteItemBeforeContext } from "../arcTypes";

function embeddedCommerceCartsDeleteItemBefore(context: EmbeddedCommerceCartsDeleteItemBeforeContext, callback: Callback) {
    console.log("embedded.commerce.carts.deleteItem.before");
}

export default embeddedCommerceCartsDeleteItemBefore
