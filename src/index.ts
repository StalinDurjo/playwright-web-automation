// Silence is golden

import { calculateCharge } from "support/calculate-charges/calculate-charges";
import MockEnvironment from "support/mock-utility/mock-environment";
import { isSetupRequired } from "support/testability";
import SimpleScore from "support/utils/simple-score";
import { GLOBAL_ADMIN_PASSWORD, GLOBAL_ADMIN_USERNAME } from "support/variable";

(async () => {
  // const baseUrl = "http://localhost:9999"
  // console.log(await isSetupRequired(baseUrl));
  // const env = new MockEnvironment({baseUrl: baseUrl})
  // env.setBasicAuth(GLOBAL_ADMIN_USERNAME, GLOBAL_ADMIN_PASSWORD)
  // env.useMode('API')
  // await env.enableTax(true)

  calculateCharge({ productPrice: 9.19, productQuantity: 2, taxRate: 0.07, isTaxInclusive: true, shippingTax: 5, allowShippingPerQuantity: true, taxOnShipping: true });
})();
