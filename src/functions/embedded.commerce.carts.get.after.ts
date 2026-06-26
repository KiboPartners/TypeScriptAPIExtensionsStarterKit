import { Callback, EmbeddedCommerceCartsGetAfterContext } from "../arcTypes";

async function embeddedCommerceCartsGetAfter(context: EmbeddedCommerceCartsGetAfterContext, callback: Callback) {
  console.log("embedded.commerce.carts.get.after");

  // TODO: extension logic here.
  // const config = new Configuration(context);

  callback();
}

export default embeddedCommerceCartsGetAfter;
