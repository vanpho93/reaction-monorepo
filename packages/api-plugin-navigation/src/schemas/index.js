import importAsString from "@brian-demo-050822/api-utils/importAsString.js";

const schema = importAsString("./schema.graphql");
const settings = importAsString("./settings.graphql");

export default [schema, settings];
