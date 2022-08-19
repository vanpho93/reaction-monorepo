/* eslint-disable */

// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {
    "^@brian-demo-050822/api-utils/(.*)$": "@brian-demo-050822/api-utils/lib/$1"
  },

  // The test environment that will be used for testing
  testEnvironment: "node",

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: [
    // Any packages that are published only as ESM need to be listed here
    "node_modules/(?!(@brian-demo-050822/api-utils)/)"
  ]
};
