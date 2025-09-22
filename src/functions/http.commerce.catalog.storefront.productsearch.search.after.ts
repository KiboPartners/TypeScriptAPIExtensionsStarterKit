import { Callback, HttpContext } from "../arcTypes";

import {ProductSearchResult} from "@kibocommerce/rest-sdk/clients/CatalogStorefront"

function httpCommerceCatalogStorefrontProductsearchSearchAfter(context:HttpContext<ProductSearchResult>, callback: Callback) {
    console.log("http.commerce.catalog.storefront.productsearch.search.after");
}

export default httpCommerceCatalogStorefrontProductsearchSearchAfter