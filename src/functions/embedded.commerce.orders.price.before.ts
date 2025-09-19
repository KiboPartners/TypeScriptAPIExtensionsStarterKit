import { Callback, EmbeddedCommerceOrdersPriceBeforeContext } from "../arcTypes";

function embeddedCommerceOrdersPriceBefore(context: EmbeddedCommerceOrdersPriceBeforeContext, callback: Callback) {
    console.log("embedded.commerce.orders.price.before");
}

export default embeddedCommerceOrdersPriceBefore
