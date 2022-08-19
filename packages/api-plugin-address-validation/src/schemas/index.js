import importAsString from "@brian-demo-050822/api-utils/importAsString.js";

const schema = importAsString("./schema.graphql");
const addressValidationRuleSchema = importAsString("./AddressValidationRule.graphql");

export default [schema, addressValidationRuleSchema];
