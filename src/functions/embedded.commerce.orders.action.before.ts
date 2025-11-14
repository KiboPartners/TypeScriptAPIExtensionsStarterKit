import { Callback, EmbeddedCommerceOrdersActionBeforeContext } from "../arcTypes";

function embeddedCommerceOrdersActionBefore(context: EmbeddedCommerceOrdersActionBeforeContext, callback: Callback) {
  console.log("embedded.commerce.orders.action.before");
}

export default embeddedCommerceOrdersActionBefore
