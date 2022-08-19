import decodeOpaqueIdForNamespace from "@brian-demo-050822/api-utils/decodeOpaqueIdForNamespace.js";
import encodeOpaqueId from "@brian-demo-050822/api-utils/encodeOpaqueId.js";

const namespaces = {
  Product: "reaction/product",
  Shop: "reaction/shop",
  Tag: "reaction/tag"
};

export const encodeProductOpaqueId = encodeOpaqueId(namespaces.Product);
export const encodeShopOpaqueId = encodeOpaqueId(namespaces.Shop);
export const encodeTagOpaqueId = encodeOpaqueId(namespaces.Tag);

export const decodeProductOpaqueId = decodeOpaqueIdForNamespace(namespaces.Product);
export const decodeShopOpaqueId = decodeOpaqueIdForNamespace(namespaces.Shop);
export const decodeTagOpaqueId = decodeOpaqueIdForNamespace(namespaces.Tag);
