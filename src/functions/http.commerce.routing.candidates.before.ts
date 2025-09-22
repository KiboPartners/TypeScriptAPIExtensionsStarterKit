import { Callback, HttpContext } from "../arcTypes";
import {CandidateSuggestion} from "@kibocommerce/rest-sdk/clients/OrderRouting"


function httpCommerceRoutingCandidatesBefore(context:HttpContext<CandidateSuggestion>, callback: Callback) {
    console.log("http.commerce.routing.candidates.before");
}

export default httpCommerceRoutingCandidatesBefore