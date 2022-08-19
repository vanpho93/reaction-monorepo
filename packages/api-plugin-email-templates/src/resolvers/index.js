import getConnectionTypeResolvers from "@brian-demo-050822/api-utils/graphql/getConnectionTypeResolvers.js";
import Query from "./Query/index.js";
import Mutation from "./Mutation/index.js";

export default {
  Query,
  Mutation,
  ...getConnectionTypeResolvers("Template")
};
