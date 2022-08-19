import decodeOpaqueIdForNamespace from "@brian-demo-050822/api-utils/decodeOpaqueIdForNamespace.js";
import encodeOpaqueId from "@brian-demo-050822/api-utils/encodeOpaqueId.js";

const namespaces = {
  Cart: "reaction/cart",
  FulfillmentGroup: "reaction/fulfillmentGroup",
  FulfillmentMethod: "reaction/fulfillmentMethod"
};

export const encodeFulfillmentMethodOpaqueId = encodeOpaqueId(namespaces.FulfillmentMethod);

export const decodeCartOpaqueId = decodeOpaqueIdForNamespace(namespaces.Cart);
export const decodeFulfillmentGroupOpaqueId = decodeOpaqueIdForNamespace(namespaces.FulfillmentGroup);
export const decodeFulfillmentMethodOpaqueId = decodeOpaqueIdForNamespace(namespaces.FulfillmentMethod);
