import decodeOpaqueIdForNamespace from "@brian-demo-050822/api-utils/decodeOpaqueIdForNamespace.js";
import encodeOpaqueId from "@brian-demo-050822/api-utils/encodeOpaqueId.js";

const namespaces = {
  Shop: "reaction/shop",
  MediaRecord: "reaction/mediaRecord"
};

export const encodeMediaRecordOpaqueId = encodeOpaqueId(namespaces.MediaRecord);
export const encodeShopOpaqueId = encodeOpaqueId(namespaces.Shop);

export const decodeMediaRecordOpaqueId = decodeOpaqueIdForNamespace(namespaces.MediaRecord);
export const decodeShopOpaqueId = decodeOpaqueIdForNamespace(namespaces.Shop);
