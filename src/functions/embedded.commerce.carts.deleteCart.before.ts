import { Callback, EmbeddedCommerceCartsDeleteCartBeforeContext } from "../arcTypes";

function embeddedCommerceCartsDeleteCartBefore(context: EmbeddedCommerceCartsDeleteCartBeforeContext, callback: Callback) {
    console.log("embedded.commerce.carts.deleteCart.before");
}

export default embeddedCommerceCartsDeleteCartBefore
