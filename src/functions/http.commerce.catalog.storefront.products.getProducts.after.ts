import { Callback, HttpContext } from "../arcTypes";

import {Product} from "@kibocommerce/rest-sdk/clients/CatalogStorefront/models";

function httpCommerceCatalogStorefrontProductsGetProductsAfter(context:HttpContext<Product[]>, callback: Callback) {
    console.log("http.commerce.catalog.storefront.products.getProducts.after");
}

export default httpCommerceCatalogStorefrontProductsGetProductsAfter