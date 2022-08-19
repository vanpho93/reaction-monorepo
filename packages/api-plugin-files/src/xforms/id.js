import decodeOpaqueIdForNamespace from "@brian-demo-050822/api-utils/decodeOpaqueIdForNamespace.js";
import encodeOpaqueId from "@brian-demo-050822/api-utils/encodeOpaqueId.js";

const namespaces = {
  MediaRecord: "reaction/mediaRecord",
  Product: "reaction/product",
  Shop: "reaction/shop"
};

export const encodeMediaRecordOpaqueId = encodeOpaqueId(namespaces.MediaRecord);
export const encodeProductOpaqueId = encodeOpaqueId(namespaces.Product);
export const encodeShopOpaqueId = encodeOpaqueId(namespaces.Shop);

export const decodeMediaRecordOpaqueId = decodeOpaqueIdForNamespace(namespaces.MediaRecord);
export const decodeProductOpaqueId = decodeOpaqueIdForNamespace(namespaces.Product);
export const decodeShopOpaqueId = decodeOpaqueIdForNamespace(namespaces.Shop);
