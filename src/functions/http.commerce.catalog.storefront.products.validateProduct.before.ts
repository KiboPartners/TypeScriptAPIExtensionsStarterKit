import { Callback, HttpContext } from "../arcTypes";

import {Product} from "@kibocommerce/rest-sdk/clients/CatalogStorefront"

function httpCommerceCatalogStorefrontProductsValidateProductBefore(context:HttpContext<Product>, callback: Callback) {
    console.log("http.commerce.catalog.storefront.products.validateProduct.before");
}

export default httpCommerceCatalogStorefrontProductsValidateProductBefore