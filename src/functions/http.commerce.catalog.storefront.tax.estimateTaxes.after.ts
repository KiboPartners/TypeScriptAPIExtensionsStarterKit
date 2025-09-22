import { Callback, HttpContext } from "../arcTypes";

import { OrderTaxContext} from "@kibocommerce/rest-sdk/clients/PricingStorefront"
import { PricingTaxableOrder } from "@kibocommerce/rest-sdk/clients/Commerce/models";


function httpCommerceCatalogStorefrontTaxEstimateTaxesAfter(context:HttpContext<PricingTaxableOrder,OrderTaxContext>, callback: Callback) {
    console.log("http.commerce.catalog.storefront.tax.estimateTaxes.after");
}

export default httpCommerceCatalogStorefrontTaxEstimateTaxesAfter