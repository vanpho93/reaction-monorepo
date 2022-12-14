import importAsString from "@reactioncommerce/api-utils/importAsString.js";
import insertPrimaryShop from "@reactioncommerce/api-utils/tests/insertPrimaryShop.js";
import Factory from "/tests/util/factory.js";
import { importPluginsJSONFile, ReactionTestAPICore } from "@reactioncommerce/api-core";

const CreateSurchargeMutation = importAsString("./CreateSurchargeMutation.graphql");

jest.setTimeout(300000);

const internalShopId = "123";
const opaqueShopId = "cmVhY3Rpb24vc2hvcDoxMjM="; // reaction/shop:123
const shopName = "Test Shop";
const surchargeAttributes = [
  { property: "vendor", value: "reaction", propertyType: "string", operator: "eq" },
  { property: "productType", value: "knife", propertyType: "string", operator: "eq" }
];

const surchargeMessagesByLanguage = [
  {
    content: "You are shipping hazardous items, there is a 19.99 surcharge",
    language: "en"
  }, {
    content: "Spanish - You are shipping hazardous items, there is a 19.99 surcharge",
    language: "es"
  }
];

const surchargeDestination = { region: ["CO", "NY"] };

const adminGroup = Factory.Group.makeOne({
  _id: "adminGroup",
  createdBy: null,
  name: "admin",
  permissions: ["reaction:legacy:surcharges/create"],
  slug: "admin",
  shopId: internalShopId
});

const mockAdminAccount = Factory.Account.makeOne({
  groups: [adminGroup._id],
  shopId: internalShopId
});

let testApp;
let createSurcharge;

beforeAll(async () => {
  testApp = new ReactionTestAPICore();
  const plugins = await importPluginsJSONFile("../../../../../plugins.json", (pluginList) => {
    // Remove the `files` plugin when testing. Avoids lots of errors.
    delete pluginList.files;

    return pluginList;
  });
  await testApp.reactionNodeApp.registerPlugins(plugins);
  await testApp.start();
  await insertPrimaryShop(testApp.context, {
    _id: internalShopId,
    name: shopName,
    currency: "USD",
    shopType: "merchant",
    slug: "my-shop"
  });
  await testApp.collections.Groups.insertOne(adminGroup);
  await testApp.createUserAndAccount(mockAdminAccount);

  createSurcharge = testApp.mutate(CreateSurchargeMutation);
});

// There is no need to delete any test data from collections because
// testApp.stop() will drop the entire test database. Each integration
// test file gets its own test database.
afterAll(() => testApp.stop());

afterEach(async () => {
  await testApp.clearLoggedInUser();
});

test("an unauthorized user cannot create a surcharge", async () => {
  try {
    await createSurcharge({
      createSurchargeInput: {
        shopId: opaqueShopId,
        surcharge: {
          amount: 19.99,
          messagesByLanguage: surchargeMessagesByLanguage,
          type: "surcharge",
          attributes: surchargeAttributes,
          destination: surchargeDestination
        }
      }
    });
  } catch (error) {
    expect(error).toMatchSnapshot();
  }
});

test("an authorized user can create a surcharge", async () => {
  await testApp.setLoggedInUser(mockAdminAccount);
  let result;

  try {
    result = await createSurcharge({
      createSurchargeInput: {
        shopId: opaqueShopId,
        surcharge: {
          amount: 19.99,
          messagesByLanguage: surchargeMessagesByLanguage,
          type: "surcharge",
          attributes: surchargeAttributes,
          destination: surchargeDestination
        }
      }
    });
  } catch (error) {
    expect(error).toBeUndefined();
  }

  expect(result.createSurcharge.surcharge.shopId).toEqual(opaqueShopId);
  expect(result.createSurcharge.surcharge.amount.amount).toEqual(19.99);
  expect(result.createSurcharge.surcharge.messagesByLanguage).toEqual(surchargeMessagesByLanguage);
  expect(result.createSurcharge.surcharge.attributes).toEqual(surchargeAttributes);
  expect(result.createSurcharge.surcharge.destination).toEqual(surchargeDestination);
});

test("an authorized user can create a surcharge with amount as 0", async () => {
  await testApp.setLoggedInUser(mockAdminAccount);
  let result;

  try {
    result = await createSurcharge({
      createSurchargeInput: {
        shopId: opaqueShopId,
        surcharge: {
          amount: 0,
          messagesByLanguage: surchargeMessagesByLanguage,
          type: "surcharge",
          attributes: surchargeAttributes,
          destination: surchargeDestination
        }
      }
    });
  } catch (error) {
    expect(error).toBeUndefined();
  }

  expect(result.createSurcharge.surcharge.shopId).toEqual(opaqueShopId);
  expect(result.createSurcharge.surcharge.amount.amount).toEqual(0);
  expect(result.createSurcharge.surcharge.messagesByLanguage).toEqual(surchargeMessagesByLanguage);
  expect(result.createSurcharge.surcharge.attributes).toEqual(surchargeAttributes);
  expect(result.createSurcharge.surcharge.destination).toEqual(surchargeDestination);
});

test("an authorized user cannot create a surcharge with amount undefined", async () => {
  await testApp.setLoggedInUser(mockAdminAccount);

  try {
    await createSurcharge({
      createSurchargeInput: {
        shopId: opaqueShopId,
        surcharge: {
          amount: undefined,
          messagesByLanguage: surchargeMessagesByLanguage,
          type: "surcharge",
          attributes: surchargeAttributes,
          destination: surchargeDestination
        }
      }
    });
  } catch (error) {
    // expect error to be thrown
    expect(error);
  }
});
