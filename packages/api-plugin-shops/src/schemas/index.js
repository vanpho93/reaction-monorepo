import importAsString from "@brian-demo-050822/api-utils/importAsString.js";

const createShop = importAsString("./createShop.graphql");
const schema = importAsString("./schema.graphql");
const updateShop = importAsString("./updateShop.graphql");

export default [createShop, schema, updateShop];
