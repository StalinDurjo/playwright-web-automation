// Silence is golden

import MockData from "support/mock-utility/mock-data";
import MockEnvironment from "support/mock-utility/mock-environment";

(async () => {
  // const mock = new MockData({ baseUrl: "http://localhost:9999/" });
  // mock.useMode("API");
  // mock.setBasicAuth("admin", "password");
  // mock.createProducts({ limit: 3 });

  const env = new MockEnvironment({ baseUrl: "http://localhost:9999/" });
  env.useMode("API");
  env.setBasicAuth("admin", "password");
  env.enableTax(false);
})();
