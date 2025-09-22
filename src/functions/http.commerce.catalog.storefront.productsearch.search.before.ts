import { Callback, HttpContext } from "../arcTypes";
import { ProductSearchResult } from "@kibocommerce/rest-sdk/clients/CatalogStorefront/models/";

function httpCommerceCatalogStorefrontProductsearchSearchBefore(context:HttpContext<ProductSearchResult>, callback: Callback) {
    console.log("http.commerce.catalog.storefront.productsearch.search.before");
}

export default httpCommerceCatalogStorefrontProductsearchSearchBefore