import { createFactoryForSchema, Factory } from "@reactioncommerce/data-factory";

import {
  Account,
  AccountProfileAddress,
  Email,
  Group
} from "@brian-demo-050822/api-plugin-accounts/src/simpleSchemas.js";

import {
  AddressValidationRule
} from "@brian-demo-050822/api-plugin-address-validation/src/simpleSchemas.js";

import {
  Cart,
  CartAddress,
  CartInvoice,
  CartItem,
  ShipmentQuote
} from "@brian-demo-050822/api-plugin-carts/src/simpleSchemas.js";

import {
  Catalog,
  CatalogProduct,
  CatalogProductOption,
  CatalogProductVariant
} from "@brian-demo-050822/api-plugin-catalogs/src/simpleSchemas.js";

import {
  DiscountCodes
} from "@brian-demo-050822/api-plugin-discounts-codes/src/simpleSchemas.js";

import {
  EmailTemplates
} from "@brian-demo-050822/api-plugin-email-templates/src/simpleSchemas.js";

import {
  extendInventorySchemas
} from "@brian-demo-050822/api-plugin-inventory/src/simpleSchemas.js";

import {
  SimpleInventoryCollectionSchema as SimpleInventory
} from "@brian-demo-050822/api-plugin-inventory-simple/src/simpleSchemas.js";

import {
  NavigationItem,
  NavigationTree,
  NavigationTreeItem
} from "@brian-demo-050822/api-plugin-navigation/src/simpleSchemas.js";

import {
  CommonOrder,
  CommonOrderItem,
  extendOrdersSchemas,
  Order,
  OrderAddress,
  OrderFulfillmentGroup,
  orderFulfillmentGroupInputSchema,
  orderInputSchema,
  OrderInvoice,
  OrderItem,
  orderItemInputSchema,
  Payment
} from "@brian-demo-050822/api-plugin-orders/src/simpleSchemas.js";

import {
  extendSimplePricingSchemas
} from "@brian-demo-050822/api-plugin-pricing-simple/src/simpleSchemas.js";

import {
  Product,
  ProductVariant
} from "@brian-demo-050822/api-plugin-products/src/simpleSchemas.js";

import {
  Shop
} from "@brian-demo-050822/api-plugin-shops/src/simpleSchemas.js";

import FulfillmentMethod from "@brian-demo-050822/api-plugin-shipments-flat-rate/src/util/methodSchema.js";

import Restriction from "@brian-demo-050822/api-plugin-shipments-flat-rate/src/util/restrictionSchema.js";

import {
  Sitemap
} from "@brian-demo-050822/api-plugin-sitemap-generator/src/simpleSchemas.js";

import {
  Surcharge
} from "@brian-demo-050822/api-plugin-surcharges/src/simpleSchemas.js";

import {
  Tag
} from "@brian-demo-050822/api-plugin-tags/src/simpleSchemas.js";

import {
  extendTaxesSchemas
} from "@brian-demo-050822/api-plugin-taxes/src/simpleSchemas.js";

import {
  TaxRates
} from "@brian-demo-050822/api-plugin-taxes-flat-rate/src/simpleSchemas.js";


const schemasToAddToFactory = {
  Account,
  AccountProfileAddress,
  AddressValidationRule,
  Cart,
  CartAddress,
  CartInvoice,
  CartItem,
  Catalog,
  CatalogProduct,
  CatalogProductOption,
  CatalogProductVariant,
  CommonOrder,
  CommonOrderItem,
  Discounts: DiscountCodes,
  Email,
  EmailTemplates,
  FulfillmentMethod,
  Group,
  NavigationItem,
  NavigationTree,
  NavigationTreeItem,
  Order,
  OrderAddress,
  OrderFulfillmentGroup,
  orderFulfillmentGroupInputSchema,
  orderInputSchema,
  OrderInvoice,
  OrderItem,
  orderItemInputSchema,
  Payment,
  Product,
  ProductVariant,
  Restriction,
  ShipmentQuote,
  Shop,
  SimpleInventory,
  Sitemap,
  Surcharge,
  Tag,
  TaxRates
};

// Extend before creating factories in case some of the added fields
// are required.
extendInventorySchemas(schemasToAddToFactory);
extendSimplePricingSchemas(schemasToAddToFactory);
extendTaxesSchemas(schemasToAddToFactory);
extendOrdersSchemas(schemasToAddToFactory);

// Adds each to `Factory` object. For example, `Factory.Cart`
// will be the factory that builds an object that matches the
// `Cart` schema.
Object.keys(schemasToAddToFactory).forEach((key) => {
  createFactoryForSchema(key, schemasToAddToFactory[key]);
});

export default Factory;
