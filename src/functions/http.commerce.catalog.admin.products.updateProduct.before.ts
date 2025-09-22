import { Callback, HttpContext } from "../arcTypes";
import { Product } from "@kibocommerce/rest-sdk/clients/CatalogAdministration";

function httpCommerceCatalogAdminProductsUpdateProductBefore(context:HttpContext<Product>, callback: Callback) {
    console.log("http.commerce.catalog.admin.products.updateProduct.before");
}

export default httpCommerceCatalogAdminProductsUpdateProductBefore