import imageURLs from "../util/imageURLs.js";

/**
 * @param {Object} context - an object containing the per-request state
 * @param {Object[]} items Array of order fulfillment group items
 * @returns {Object[]} Same array with GraphQL-only props added
 */
export default async function xformOrderItems(context, items) {
  const xformedItems = Promise.all(items.map(async (item) => ({
    ...item,
    imageURLs: await imageURLs(context, item),
    productConfiguration: {
      productId: item.productId,
      productVariantId: item.variantId
    },
    subtotal: {
      amount: item.subtotal,
      currencyCode: item.price.currencyCode
    }
  })));

  for (const mutateItems of context.getFunctionsOfType("xformOrderItems")) {
    await mutateItems(context, xformedItems); // eslint-disable-line no-await-in-loop
  }

  return xformedItems;
}
