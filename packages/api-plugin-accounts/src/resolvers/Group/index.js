import resolveShopFromShopId from "@brian-demo-050822/api-utils/graphql/resolveShopFromShopId.js";
import { encodeGroupOpaqueId } from "../../xforms/id.js";
import createdBy from "./createdBy.js";

export default {
  _id: (node) => encodeGroupOpaqueId(node._id),
  createdBy,
  shop: resolveShopFromShopId
};
