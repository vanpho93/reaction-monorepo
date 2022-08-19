import encodeOpaqueId from "@brian-demo-050822/api-utils/encodeOpaqueId.js";

export default {
  _id: (node) => encodeOpaqueId("reaction/currency", node._id)
};
