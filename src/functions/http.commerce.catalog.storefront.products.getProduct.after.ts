import { Callback, HttpContext } from "../arcTypes";

import {Product} from "@kibocommerce/rest-sdk/clients/CatalogStorefront/models";

function httpCommerceCatalogStorefrontProductsGetProductAfter(context:HttpContext<Product[]>, callback: Callback) {
    console.log("http.commerce.catalog.storefront.products.getProduct.after");
}

export default httpCommerceCatalogStorefrontProductsGetProductAfter