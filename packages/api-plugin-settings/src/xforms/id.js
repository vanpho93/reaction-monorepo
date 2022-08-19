import decodeOpaqueIdForNamespace from "@brian-demo-050822/api-utils/decodeOpaqueIdForNamespace.js";
import encodeOpaqueId from "@brian-demo-050822/api-utils/encodeOpaqueId.js";

const namespaces = {
  Shop: "reaction/shop"
};
export const encodeShopOpaqueId = encodeOpaqueId(namespaces.Shop);

export const decodeShopOpaqueId = decodeOpaqueIdForNamespace(namespaces.Shop);
