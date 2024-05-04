// Silence is golden

import MockData from "support/data-generator/mock-data";
import EnvironmentUtility from "support/environment-utility/environment-utility";

(async () => {
  const mock = new MockData({ baseUrl: "http://localhost:9999/" });
  mock.useMode("API");
  mock.setBasicAuth("admin", "password");
  // mock.createProducts({ limit: 3 });

  const envUtility = new EnvironmentUtility({ baseUrl: "http://localhost:9999/" });
  envUtility.useMode("API");
  envUtility.setBasicAuth("admin", "password");
  envUtility.woocommerce.enableTax(false);
})();
