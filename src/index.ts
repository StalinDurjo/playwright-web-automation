import DataConfig from "support/data-gen/data-config";
import DataGen from "support/data-gen/data-gen";
import { SEED_DATA_DIRECTORY } from "support/directory";
import { isFileOfType, jsonFromCsvFile, jsonToObject } from "support/utils/utils";

// consumer key = ck_f4bce646b20aa12857658df05a11f35d60881357
// consumer secret = cs_6d356135ec9694441af1ab1785f19e73b8d2cdf9

(async () => {
  // const dataGen = new DataGen();
  // dataGen.useMode("API");
  // dataGen.setBaseUrl("http://localhost:9999");
  // dataGen.setBasicAuth("admin", "password");
  // dataGen.createProducts();

  const dataConfig = new DataConfig();
  // const formDataList = await dataConfig.productsSeedData({
  //   include: ["hello"],
  //   exclude: []
  // });
  // console.log(formDataList[0]);
  // console.log(dataConfig.loadFileInfo(SEED_DATA_DIRECTORY));

  const formDataList = await dataConfig.formSeedData("products", { include: [], exclude: [] });
  console.log(formDataList[0]);
})();
