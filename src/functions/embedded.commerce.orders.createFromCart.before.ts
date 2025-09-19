import { Callback, EmbeddedCommerceOrdersCreateFromCartBeforeContext } from "../arcTypes";

function embeddedCommerceOrdersCreateFromCartBefore(context: EmbeddedCommerceOrdersCreateFromCartBeforeContext, callback: Callback) {
    console.log("embedded.commerce.orders.createFromCart.before");
}

export default embeddedCommerceOrdersCreateFromCartBefore
