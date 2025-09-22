import { Callback, HttpContext } from "../arcTypes";
import {Category} from "@kibocommerce/rest-sdk/clients/CatalogAdministration"


function httpCommerceCatalogAdminCategoriesAddCategoryBefore(context:HttpContext<Category>, callback: Callback) {
    console.log("http.commerce.catalog.admin.categories.addCategory.before");
}

export default httpCommerceCatalogAdminCategoriesAddCategoryBefore