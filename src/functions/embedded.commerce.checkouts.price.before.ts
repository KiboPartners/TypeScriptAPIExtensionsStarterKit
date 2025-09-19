import { Callback, EmbeddedCommerceCheckoutsPriceBeforeContext } from "../arcTypes";

function embeddedCommerceCheckoutsPriceBefore(context: EmbeddedCommerceCheckoutsPriceBeforeContext, callback: Callback) {
    console.log("embedded.commerce.checkouts.price.before");
}

export default embeddedCommerceCheckoutsPriceBefore
