import importAsString from "@brian-demo-050822/api-utils/importAsString.js";

const group = importAsString("./group.graphql");
const role = importAsString("./role.graphql");

export default [group, role];
