const jestConfig = require("@brian-demo-050822/api-utils/lib/configs/jest.config.cjs");

/* eslint-disable max-len */
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

// Any packages that are published only as ESM need to be listed here
const externalNodeModules = [
  "@brian-demo-050822/api-utils",
  "@brian-demo-050822/api-plugin-carts",
  "@brian-demo-050822/api-plugin-orders"
];

jestConfig.transformIgnorePatterns = [
  // Any packages that are published only as ESM need to be listed here
  `node_modules/(?!(${externalNodeModules.join("|")})/)`
];

module.exports = jestConfig;
