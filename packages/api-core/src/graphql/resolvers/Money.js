import getCurrencyDefinitionByCode from "@brian-demo-050822/api-utils/getCurrencyDefinitionByCode.js";
import formatMoney from "@brian-demo-050822/api-utils/formatMoney.js";

export default {
  currency: (node) => getCurrencyDefinitionByCode(node.currencyCode),
  displayAmount: (node) => formatMoney(node.amount, node.currencyCode)
};
