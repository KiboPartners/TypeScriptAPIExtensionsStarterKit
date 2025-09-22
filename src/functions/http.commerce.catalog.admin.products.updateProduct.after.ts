import { Callback, HttpContext } from "../arcTypes";

import {Product} from "@kibocommerce/rest-sdk/clients/CatalogAdministration"

function httpCommerceCatalogAdminProductsUpdateProductAfter(context:HttpContext<Product>, callback: Callback) {
    console.log("http.commerce.catalog.admin.products.updateProduct.after");
}

export default httpCommerceCatalogAdminProductsUpdateProductAfter