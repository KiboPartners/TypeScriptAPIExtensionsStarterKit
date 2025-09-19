import { Callback, EmbeddedCommercePaymentsActionAfterContext } from "../arcTypes";

function embeddedCommercePaymentsActionAfter(context: EmbeddedCommercePaymentsActionAfterContext, callback: Callback) {
    console.log("embedded.commerce.payments.action.after");
}

export default embeddedCommercePaymentsActionAfter
