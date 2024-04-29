import { ROOT_DIR, SEED_DATA_DIRECTORY } from "support/directory";
import { csvToJsObject } from "support/utils/utils";
import fs from "fs";
import path from "path";

export default class DataConfig {
  private productsDataPath: string;

  constructor() {
    this.productsDataPath = `${SEED_DATA_DIRECTORY}/mockdata.products.csv`;
  }

  loadFileInfo(dataDirectory: string = "default") {
    let _dataDirectory: string;

    if (dataDirectory === "default") {
      _dataDirectory = dataDirectory;
    } else {
      _dataDirectory = ROOT_DIR;
    }

    // modify it to recusively look for mock data files in root folder and its sub folders as default
    // ignore node_modules directory

    const files = fs.readdirSync(_dataDirectory);
    const mockFiles = files.filter((file) => (path.extname(file) === ".csv" || path.extname(file) === ".json") && file.includes("mockdata."));

    const mockFileDetails = mockFiles.map((file) => {
      const extension = path.extname(file);
      const fileName = file.replace("mockdata.", "").replace(extension, "");
      const fillFilePath = path.join(_dataDirectory, file);

      return {
        fileName: fileName,
        fileType: extension.replace(".", ""),
        filePath: fillFilePath
      };
    });

    return mockFileDetails;
  }

  private async applyFilter(jsObject, { include, exclude }) {
    // console.log(jsObject);

    return jsObject;
  }

  async formSeedData(dataFileName: string, { include, exclude }) {
    const formData = [];
    const fileInfo = this.loadFileInfo(SEED_DATA_DIRECTORY).filter((fileInfo) => fileInfo.fileName === dataFileName)[0];
    let dataList: Object[];

    if (fileInfo.fileType === "csv") {
      dataList = await this.applyFilter(await csvToJsObject(fileInfo.filePath), { include, exclude });
    } else if (fileInfo.fileType === "json") {
      // TODO
      // load json file
      // convert json file into javascript object
      // pass the data through the applyFilter method
      // dataList =
    }

    for (const data of dataList) {
      const form = new FormData();

      for (const [key, value] of Object.entries(data)) {
        form.append(key, value as string);
      }

      formData.push(form);
    }

    return formData;
  }

  async productsSeedData({ include, exclude }) {
    const newFormDataList = [];
    const formDataList = await this.applyFilter(await csvToJsObject(this.productsDataPath), { include, exclude });

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
