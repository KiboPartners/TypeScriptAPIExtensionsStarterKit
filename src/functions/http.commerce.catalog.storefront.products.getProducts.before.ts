import { Callback, HttpContext } from "../arcTypes";
import {Product} from "@kibocommerce/rest-sdk/clients/CatalogStorefront/models";

function httpCommerceCatalogStorefrontProductsGetProductsBefore(context:HttpContext<Product[]>, callback: Callback) {
    console.log("http.commerce.catalog.storefront.products.getProducts.before");
}

export default httpCommerceCatalogStorefrontProductsGetProductsBefore