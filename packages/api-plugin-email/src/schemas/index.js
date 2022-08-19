import importAsString from "@brian-demo-050822/api-utils/importAsString.js";

const emailJobs = importAsString("./emailJobs.graphql");
const retryFailedEmail = importAsString("./retryFailedEmail.graphql");

export default [emailJobs, retryFailedEmail];
