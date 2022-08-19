import decodeOpaqueIdForNamespace from "@brian-demo-050822/api-utils/decodeOpaqueIdForNamespace.js";
import encodeOpaqueId from "@brian-demo-050822/api-utils/encodeOpaqueId.js";

const namespaces = {
  Cart: "reaction/cart",
  Discount: "reaction/discount",
  Shop: "reaction/shop"
};

export const encodeCartOpaqueId = encodeOpaqueId(namespaces.Cart);
export const encodeDiscountOpaqueId = encodeOpaqueId(namespaces.Discount);
export const encodeShopOpaqueId = encodeOpaqueId(namespaces.Shop);

export const decodeCartOpaqueId = decodeOpaqueIdForNamespace(namespaces.Cart);
export const decodeDiscountOpaqueId = decodeOpaqueIdForNamespace(namespaces.Discount);
export const decodeShopOpaqueId = decodeOpaqueIdForNamespace(namespaces.Shop);
