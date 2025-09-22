import { Category } from "@kibocommerce/rest-sdk/clients/CatalogAdministration";
import { Callback, HttpContext } from "../arcTypes";

function httpCommerceCatalogAdminCategoriesUpdateCategoryAfter(context:HttpContext<Category>, callback: Callback) {
    console.log("http.commerce.catalog.admin.categories.updateCategory.after");
}

export default httpCommerceCatalogAdminCategoriesUpdateCategoryAfter