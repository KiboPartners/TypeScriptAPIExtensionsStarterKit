import { Order } from "@kibocommerce/rest-sdk/clients/Commerce/models";
import { Callback, HttpContext } from "../arcTypes";

import { OrderTaxContext} from "@kibocommerce/rest-sdk/clients/PricingStorefront"
import { PricingTaxableOrder } from "@kibocommerce/rest-sdk/clients/Commerce/models";

function httpCommerceCatalogStorefrontTaxEstimateTaxesBefore(context:HttpContext<PricingTaxableOrder,OrderTaxContext>, callback: Callback) {
    console.log("http.commerce.catalog.storefront.tax.estimateTaxes.before");
}

export default httpCommerceCatalogStorefrontTaxEstimateTaxesBefore