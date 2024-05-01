import DataConfig from "support/data-gen/data-config";
import DataGen from "support/data-gen/data-gen";
import Configurator from "support/data-generator/configurator";
import MockData from "support/data-generator/mock-data";
import { ROOT_DIR, SEED_DATA_DIRECTORY } from "support/directory";
import { isFileOfType, jsonFromCsvFile, jsonToObject, searchFiles } from "support/utils/utils";

// consumer key = ck_f4bce646b20aa12857658df05a11f35d60881357
// consumer secret = cs_6d356135ec9694441af1ab1785f19e73b8d2cdf9

(async () => {
  const mockData = new MockData({ baseUrl: "http://localhost:9999/" });
  mockData.useMode("API");
  mockData.setBasicAuth("admin", "password");
  mockData.createProducts();
})();
