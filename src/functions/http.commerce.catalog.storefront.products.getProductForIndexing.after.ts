import { Callback, HttpContext } from "../arcTypes";

import {ProductForIndexing} from "@kibocommerce/rest-sdk/clients/CatalogStorefront/models";

function httpCommerceCatalogStorefrontProductsGetProductForIndexingAfter(context:HttpContext<ProductForIndexing>, callback: Callback) {
    console.log("http.commerce.catalog.storefront.products.getProductForIndexing.after");
}

export default httpCommerceCatalogStorefrontProductsGetProductForIndexingAfter