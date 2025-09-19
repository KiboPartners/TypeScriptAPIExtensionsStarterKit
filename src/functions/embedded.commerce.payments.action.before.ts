import { Callback, EmbeddedCommercePaymentsActionBeforeContext } from "../arcTypes";

function embeddedCommercePaymentsActionBefore(context: EmbeddedCommercePaymentsActionBeforeContext, callback: Callback) {
    console.log("embedded.commerce.payments.action.before");
}

export default embeddedCommercePaymentsActionBefore
