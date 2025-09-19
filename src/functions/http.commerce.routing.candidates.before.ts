import { Callback, HttpContext } from "../arcTypes";

function httpCommerceRoutingCandidatesBefore(context:HttpContext, callback: Callback) {
    console.log("http.commerce.routing.candidates.before");
}

export default httpCommerceRoutingCandidatesBefore