import { Callback, HttpContext } from "../arcTypes";
import {ResolvedPriceList} from "@kibocommerce/rest-sdk/clients/CatalogStorefront"


function httpCommerceCatalogStorefrontProductsResolvePriceListBefore(context:HttpContext<ResolvedPriceList>, callback: Callback) {
    console.log("http.commerce.catalog.storefront.products.resolvePriceList.before");
}

export default httpCommerceCatalogStorefrontProductsResolvePriceListBefore