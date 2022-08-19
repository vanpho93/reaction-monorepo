import getPaginatedResponse from "@brian-demo-050822/api-utils/graphql/getPaginatedResponse.js";
import wasFieldRequested from "@brian-demo-050822/api-utils/graphql/wasFieldRequested.js";
import xformArrayToConnection from "@brian-demo-050822/api-utils/graphql/xformArrayToConnection.js";

/**
 * @name CatalogProduct/tags
 * @method
 * @memberof Catalog/GraphQL
 * @summary Returns the tags for a product
 * @param {Object} product - CatalogProduct response from parent resolver
 * @param {TagConnectionArgs} connectionArgs - arguments sent by the client {@link ConnectionArgs|See default connection arguments}
 * @param {Object} context - an object containing the per-request state
 * @param {Object} info Info about the GraphQL request
 * @returns {Promise<Object[]>} Promise that resolves with array of Tag objects
 */
export default async function tags(product, connectionArgs, context, info) {
  const { tagIds } = product;
  if (!tagIds || tagIds.length === 0) return xformArrayToConnection(connectionArgs, []);

  const query = await context.queries.tagsByIds(context, tagIds, connectionArgs);

  return getPaginatedResponse(query, connectionArgs, {
    includeHasNextPage: wasFieldRequested("pageInfo.hasNextPage", info),
    includeHasPreviousPage: wasFieldRequested("pageInfo.hasPreviousPage", info),
    includeTotalCount: wasFieldRequested("totalCount", info)
  });
}
