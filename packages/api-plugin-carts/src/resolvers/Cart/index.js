import resolveAccountFromAccountId from "@brian-demo-050822/api-utils/graphql/resolveAccountFromAccountId.js";
import resolveShopFromShopId from "@brian-demo-050822/api-utils/graphql/resolveShopFromShopId.js";
import { encodeCartOpaqueId } from "../../xforms/id.js";
import xformCartItems from "../../xforms/xformCartItems.js";
import checkout from "./checkout.js";
import items from "./items.js";
import totalItemQuantity from "./totalItemQuantity.js";

export default {
  _id: (node) => encodeCartOpaqueId(node._id),
  account: resolveAccountFromAccountId,
  checkout,
  items,
  missingItems: (cart, _, context) => xformCartItems(context, cart.missingItems || []),
  shop: resolveShopFromShopId,
  totalItemQuantity
};
