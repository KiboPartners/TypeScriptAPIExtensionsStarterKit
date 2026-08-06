
// Import URLSearchParams polyfill for Node.js environments before any SDK imports
import 'url-search-params-polyfill';

import { ActionId, Callback, createArcFunction } from "./arcTypes/index";
import { platformApplicationsInstallImplementation } from "./platformInstall";
import * as extensionFunctions from "./functions"




const embeddedCommerceCartsGetAfterFn = createArcFunction(
  ActionId["embedded.commerce.carts.get.after"],
  function (context: any, callback: Callback) {
    extensionFunctions.embeddedCommerceCartsGetAfter(context, callback)
      .catch((e: any) => {
        console.error(e)
        callback();
      });
  }
);

const enabledFunctions = {
  "embedded.commerce.carts.get.after": embeddedCommerceCartsGetAfterFn,


};

// Now create the platform install function that references the functions object
const platformApplicationsInstall = createArcFunction(
  ActionId["embedded.platform.applications.install"],
  function (context: any, callback: Callback) {
    platformApplicationsInstallImplementation(context, callback, enabledFunctions).then(() => {
      callback()
    })
  }
);

// Add the platform install function to the functions object
(enabledFunctions as any)["embedded.platform.applications.install"] = platformApplicationsInstall;

export default enabledFunctions;
