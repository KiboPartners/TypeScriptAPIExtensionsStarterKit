import {
  Callback,
  HttpCommerceRoutingSuggestionAfterContext,
  RoutingRequest,
  RoutingRequestItem,
  RoutingResponse,
} from "../arcTypes";

// Logs only the fields this action actually reads, to avoid bloating logs with
// the full (very large) request/response payloads.
function logReadFields(label: string, kiboRequest: RoutingRequest, kiboNativeResponse: RoutingResponse) {
  let requestRead: any = kiboRequest;
  if (kiboRequest && Array.isArray(kiboRequest.items)) {
    requestRead = {
      orderType: kiboRequest.orderType,
      items: kiboRequest.items.map((item) => ({
        orderItemID: item && item.orderItemID,
        quantity: item && item.quantity,
        overrideRoutingLocation: item && item.customItemData && item.customItemData.overrideRoutingLocation,
      })),
    };
  }

  let responseRead: any = kiboNativeResponse;
  if (kiboNativeResponse) {
    responseRead = {
      assignmentSuggestions: kiboNativeResponse.assignmentSuggestions,
      stateChangeSuggestions: kiboNativeResponse.stateChangeSuggestions,
    };
  }

  console.debug(label, JSON.stringify({ requestRead, responseRead }, null, 2));
}

async function httpCommerceRoutingSuggestionAfter(
  context: HttpCommerceRoutingSuggestionAfterContext,
  callback: Callback
) {
  console.log("http.commerce.routing.suggestion.after");

  const kiboNativeResponse = context.response.body;
  const kiboRequest = context.request.body;
  console.log(JSON.stringify({kiboNativeResponse, kiboRequest}))

  logReadFields("Read fields (in):", kiboRequest, kiboNativeResponse);

  if (kiboRequest && kiboRequest.items && kiboNativeResponse && kiboNativeResponse.assignmentSuggestions) {
    // The request tells us the orderType (route) directly no need to inspect
    // existing assignments to derive one.
    const orderType = kiboRequest.orderType;
    const assignmentSuggestions = kiboNativeResponse.assignmentSuggestions;
    const stateChangeSuggestions = kiboNativeResponse.stateChangeSuggestions || {};
    kiboNativeResponse.stateChangeSuggestions = stateChangeSuggestions;

    // --- Exclusion list: items that could not be routed at any location are cancelled
    // rather than reassigned elsewhere.
    const exclusionList: Array<{ orderItemID: number; locationCode: string }> =
      kiboRequest.exclusionListLocationCode || [];
    const cancelledItemIds = new Set<string>();

    exclusionList.forEach((exclusion) => {
      if (exclusion.orderItemID == null) return;
      const itemIdStr = exclusion.orderItemID.toString();
      const requestItem = (kiboRequest.items || []).find(
        (i: RoutingRequestItem) => i.orderItemID === exclusion.orderItemID
      );
      const quantity = requestItem ? requestItem.quantity || 0 : 0;

      console.log(`Cancelling item ${itemIdStr} (excluded from location ${exclusion.locationCode})`);
      stateChangeSuggestions[itemIdStr] = {
        orderItemID: exclusion.orderItemID,
        stateChange: "CANCEL",
        quantity,
      };
      delete assignmentSuggestions[itemIdStr];
      cancelledItemIds.add(itemIdStr);
    });

    if (cancelledItemIds.size > 0) {
      logReadFields("Read fields (out):", kiboRequest, kiboNativeResponse);
      callback();
      return;
    }

    // --- Override routing: every overridden item lands at its overrideRoutingLocation.
    // Skips items already handled by the exclusion list above.
    // Any BACKORDER/CANCEL quantity is folded into that entry so it still ships.
    kiboRequest.items.forEach((item) => {
      const overrideLocation = item.customItemData && item.customItemData.overrideRoutingLocation;
      if (!overrideLocation || item.orderItemID == null) return;

      const itemIdStr = item.orderItemID.toString();
      if (cancelledItemIds.has(itemIdStr)) return;

      const assignments = assignmentSuggestions[itemIdStr];
      const stateChange = stateChangeSuggestions[itemIdStr];
      const stateChangeQty = stateChange ? stateChange.quantity || 0 : 0;

      // Quantity = everything already assigned plus any state-changed quantity.
      // If nothing is assigned or state-changed, fall back to the requested qty.
      let quantity = stateChangeQty;
      if (assignments && assignments.length > 0) {
        quantity += assignments.reduce((sum, a) => sum + (a.quantity || 0), 0);
      } else if (stateChangeQty === 0) {
        quantity = item.quantity || 0;
      }

      console.log(
        `Routing item ${itemIdStr} to ${overrideLocation} as ${orderType} (qty ${quantity})`
      );
      assignmentSuggestions[itemIdStr] = [
        {
          orderItemID: item.orderItemID,
          locationCode: overrideLocation,
          quantity: quantity,
          route: orderType,
        },
      ];

      // Quantity now lives in the assignment — drop the state change.
      if (stateChange) delete stateChangeSuggestions[itemIdStr];
    });
  }

  logReadFields("Read fields (out):", kiboRequest, kiboNativeResponse);
  callback();
}

export default httpCommerceRoutingSuggestionAfter;
