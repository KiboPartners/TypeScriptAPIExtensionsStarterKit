import { Category } from "@kibocommerce/rest-sdk/clients/CatalogAdministration";
import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCatalogAdminCategoriesUpdateCategoryBefore(context:HttpContext<Category>, callback: Callback) {
    console.log("http.commerce.catalog.admin.categories.updateCategory.before");
}

export default httpCommerceCatalogAdminCategoriesUpdateCategoryBefore