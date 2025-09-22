import { Callback, HttpContext } from "../arcTypes";
import {CheckoutSettings} from "@kibocommerce/rest-sdk/clients/Settings"

function httpCommerceSettingsCheckoutPaymentsettingsUpdatePaymentSettingsBefore(context:HttpContext<CheckoutSettings>, callback: Callback) {
    console.log("http.commerce.settings.checkout.paymentsettings.updatePaymentSettings.before");
}

export default httpCommerceSettingsCheckoutPaymentsettingsUpdatePaymentSettingsBefore