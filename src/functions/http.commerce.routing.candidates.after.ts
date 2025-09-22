import { Callback, HttpContext } from "../arcTypes";
import {CandidateSuggestion} from "@kibocommerce/rest-sdk/clients/OrderRouting"

function httpCommerceRoutingCandidatesAfter(context:HttpContext<CandidateSuggestion>, callback: Callback) {
    console.log("http.commerce.routing.candidates.after");
}

export default httpCommerceRoutingCandidatesAfter