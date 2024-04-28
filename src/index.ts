import DataGen from "support/data-gen/data-gen";
import { isFileOfType, jsonFromCsvFile, jsonToObject } from "support/utils/utils";

// const dataConverter = new DataConverter();
// dataConverter.csvToJson();

const products = `/Users/wedevs/Desktop/sdet/playwright-automation-ci/resources/products.csv`;
const vendors = `/Users/wedevs/Desktop/sdet/playwright-automation-ci/resources/vendors.csv`;

// const data = isFileOfType(".csv", `/Users/wedevs/Desktop/sdet/playwright-automation-ci/resources/products.csv`);
// console.log(data);

// consumer key = ck_f4bce646b20aa12857658df05a11f35d60881357
// consumer secret = cs_6d356135ec9694441af1ab1785f19e73b8d2cdf9

(async () => {
  // const jsonData = await jsonFromCsvFile(products);

  // console.log(jsonToObject(jsonData));

  // await getProducts();
  // const formData = new FormData();
  // formData.append("name", "Test Product 1");
  // // console.log(formData);
  // await createProduct(formData);

  // const form = await productsFormData();
  // console.log(form);

  const dataGen = new DataGen();
  dataGen.useMode("API");
  dataGen.setBaseUrl("http://localhost:9999");
  dataGen.setBasicAuth("admin", "password");
  dataGen.createProducts();
})();
