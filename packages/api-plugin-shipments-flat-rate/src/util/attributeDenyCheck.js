import operators from "@brian-demo-050822/api-utils/operators.js";
import propertyTypes from "@brian-demo-050822/api-utils/propertyTypes.js";
import isDestinationRestricted from "./isDestinationRestricted.js";

/**
 * @summary Filter shipping methods based on per method deny attribute restrictions
 * @param {Object} methodRestrictions - method restrictions from FlatRateFulfillmentRestrcitionsCollection
 * @param {Object} method - current method to check restrictions against
 * @param {Object} hydratedOrder - hydrated order for current order
 * @returns {Bool} true / false as to whether method is still valid after this check
 */
export async function attributeDenyCheck(methodRestrictions, method, hydratedOrder) {
  // Get method specific attribute deny restrictions
  const attributesDenyRestrictions = methodRestrictions.filter((restriction) => restriction.type === "deny" && Array.isArray(restriction.attributes));

  // If there are no attributes deny restrictions, this method is valid at this point
  if (attributesDenyRestrictions.length === 0) return true;

  const { items, shippingAddress } = hydratedOrder;

  const denyMethod = items.some((item) => { // eslint-disable-line
    // For each item, run through the restrictions
    return attributesDenyRestrictions.some((methodRestriction) => {
      const { attributes, destination } = methodRestriction;

      // Item must meet all attributes to be restricted
      return attributes.every((attribute) => {
        let attributeFound = operators[attribute.operator](item[attribute.property], propertyTypes[attribute.propertyType](attribute.value));

        // If attribute is an array on the item, use `includes` instead of checking for ===
        // This works for tags, tagIds, and any future attribute that might be an array
        if (Array.isArray(item[attribute.property])) {
          attributeFound = item[attribute.property].includes(attribute.value);
        }

        if (attributeFound) {
          // If there is no destination restriction, destination restriction is global
          return !destination || isDestinationRestricted(destination, shippingAddress);
        }

        // If shipping location does not match restricted location && attribute, method is not restricted
        return false;
      });
    });
  });

  return !denyMethod;
}
