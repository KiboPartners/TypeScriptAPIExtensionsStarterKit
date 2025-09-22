import { Callback, HttpContext } from "../arcTypes";
import {Category} from "@kibocommerce/rest-sdk/clients/CatalogAdministration"

function httpCommerceCatalogAdminCategoriesAddCategoryAfter(context:HttpContext<Category>, callback: Callback) {
    console.log("http.commerce.catalog.admin.categories.addCategory.after");
}

export default httpCommerceCatalogAdminCategoriesAddCategoryAfter