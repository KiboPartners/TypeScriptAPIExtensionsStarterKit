import { Callback, HttpContext } from "../arcTypes";

function httpCommerceRoutingCandidatesAfter(context:HttpContext, callback: Callback) {
    console.log("http.commerce.routing.candidates.after");
}

export default httpCommerceRoutingCandidatesAfter