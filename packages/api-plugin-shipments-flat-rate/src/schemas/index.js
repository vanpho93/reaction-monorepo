import importAsString from "@brian-demo-050822/api-utils/importAsString.js";

const schema = importAsString("./schema.graphql");
const restrictions = importAsString("./restrictions.graphql");

export default [schema, restrictions];
