import { Callback, HttpContext } from "../arcTypes";

import {Product} from "@kibocommerce/rest-sdk/clients/CatalogStorefront/models";

function httpCommerceCatalogStorefrontProductsConfiguredProductAfter(context:HttpContext<Product>, callback: Callback) {
    console.log("http.commerce.catalog.storefront.products.configuredProduct.after");
}

export default httpCommerceCatalogStorefrontProductsConfiguredProductAfter