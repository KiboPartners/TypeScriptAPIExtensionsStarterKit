import { Callback, HttpContext } from "../arcTypes";

import {ResolvedPriceList} from "@kibocommerce/rest-sdk/clients/CatalogStorefront"

function httpCommerceCatalogStorefrontProductsResolvePriceListAfter(context:HttpContext<ResolvedPriceList>, callback: Callback) {
    console.log("http.commerce.catalog.storefront.products.resolvePriceList.after");
}

export default httpCommerceCatalogStorefrontProductsResolvePriceListAfter