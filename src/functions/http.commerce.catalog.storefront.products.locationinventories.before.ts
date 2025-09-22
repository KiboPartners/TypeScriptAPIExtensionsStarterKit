import { Callback, HttpContext } from "../arcTypes";
import {LocationInventoryQuery} from "@kibocommerce/rest-sdk/clients/CatalogStorefront"


function httpCommerceCatalogStorefrontProductsLocationinventoriesBefore(context:HttpContext<LocationInventoryQuery>, callback: Callback) {
    console.log("http.commerce.catalog.storefront.products.locationinventories.before");
}

export default httpCommerceCatalogStorefrontProductsLocationinventoriesBefore