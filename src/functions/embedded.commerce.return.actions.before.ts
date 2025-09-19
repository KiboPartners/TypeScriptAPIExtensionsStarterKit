import { Callback, EmbeddedCommerceReturnActionsBeforeContext } from "../arcTypes";

function embeddedCommerceReturnActionsBefore(context:EmbeddedCommerceReturnActionsBeforeContext, callback: Callback) {
    console.log("embedded.commerce.return.actions.before");
}

export default embeddedCommerceReturnActionsBefore