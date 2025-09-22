import { Callback, HttpContext } from "../arcTypes";
import { ProductForIndexing } from "@kibocommerce/rest-sdk/clients/CatalogStorefront/models";

function httpCommerceCatalogStorefrontProductsGetProductForIndexingBefore(context:HttpContext<ProductForIndexing>, callback: Callback) {
    console.log("http.commerce.catalog.storefront.products.getProductForIndexing.before");
}

export default httpCommerceCatalogStorefrontProductsGetProductForIndexingBefore