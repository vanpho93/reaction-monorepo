import { createFactoryForSchema, Factory } from "@reactioncommerce/data-factory";

import {
  CartAddress
} from "@brian-demo-050822/api-plugin-carts/src/simpleSchemas.js";

import {
  CommonOrder,
  CommonOrderItem,
  OrderAddress
} from "@brian-demo-050822/api-plugin-orders/src/simpleSchemas.js";

import {
  Taxes,
  TaxServiceItemTax,
  TaxServiceResult,
  TaxSummary
} from "../simpleSchemas.js";

const schemasToAddToFactory = {
  CartAddress,
  CommonOrder,
  CommonOrderItem,
  OrderAddress,
  Taxes,
  TaxServiceItemTax,
  TaxServiceResult,
  TaxSummary
};

// Adds each to `Factory` object. For example, `Factory.Cart`
// will be the factory that builds an object that matches the
// `Cart` schema.
Object.keys(schemasToAddToFactory).forEach((key) => {
  createFactoryForSchema(key, schemasToAddToFactory[key]);
});

export default Factory;
