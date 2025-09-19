import { Callback } from "../arcTypes";

function embeddedCommercePaymentsActionBefore(context:any, callback: Callback) {
    console.log("embedded.commerce.payments.action.before");
}

export default embeddedCommercePaymentsActionBefore