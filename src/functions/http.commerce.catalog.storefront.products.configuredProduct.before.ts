import { Callback, HttpContext } from "../arcTypes";

import {Product} from "@kibocommerce/rest-sdk/clients/CatalogStorefront/models";


function httpCommerceCatalogStorefrontProductsConfiguredProductBefore(context:HttpContext<Product>, callback: Callback) {
    console.log("http.commerce.catalog.storefront.products.configuredProduct.before");
}

export default httpCommerceCatalogStorefrontProductsConfiguredProductBefore