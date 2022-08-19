import importAsString from "@brian-demo-050822/api-utils/importAsString.js";

const schema = importAsString("./schema.graphql");
const updateTemplate = importAsString("./updateTemplate.graphql");

export default [
  schema,
  updateTemplate
];
