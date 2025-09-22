import { Callback, HttpContext } from "../arcTypes";

import {LocationInventoryQuery} from "@kibocommerce/rest-sdk/clients/CatalogStorefront"

function httpCommerceCatalogStorefrontProductsLocationinventoriesAfter(context:HttpContext<LocationInventoryQuery>, callback: Callback) {
    console.log("http.commerce.catalog.storefront.products.locationinventories.after");
}

export default httpCommerceCatalogStorefrontProductsLocationinventoriesAfter