import { csvToJsObject, getPath } from "support/utils/utils";

export default class DataConfig {
  private productsDataPath: string;

  constructor() {
    this.productsDataPath = getPath(`/resources/seed-data/vendors.csv`);
  }

  async productsFormData() {
    const newFormDataList = [];
    const formDataList = await csvToJsObject(this.productsDataPath);

    for (const formData of formDataList) {
      const form = new FormData();

      for (const [key, value] of Object.entries(formData)) {
        form.append(key, value as string);
      }

      newFormDataList.push(form);
    }

    return newFormDataList;
  }
}
