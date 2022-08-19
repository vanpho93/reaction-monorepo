import importAsString from "@brian-demo-050822/api-utils/importAsString.js";

const cart = importAsString("./cart.graphql");
const checkout = importAsString("./checkout.graphql");

export default [cart, checkout];
