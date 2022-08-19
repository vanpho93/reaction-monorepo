import resolveShopFromShopId from "@brian-demo-050822/api-utils/graphql/resolveShopFromShopId.js";
import { encodeCatalogItemOpaqueId } from "../../xforms/id.js";

export default {
  _id: (item) => encodeCatalogItemOpaqueId(item._id),
  shop: resolveShopFromShopId
};
