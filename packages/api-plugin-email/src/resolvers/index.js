import getConnectionTypeResolvers from "@brian-demo-050822/api-utils/graphql/getConnectionTypeResolvers.js";
import Mutation from "./Mutation/index.js";
import Query from "./Query/index.js";

export default {
  Mutation,
  Query,
  ...getConnectionTypeResolvers("EmailJob")
};
