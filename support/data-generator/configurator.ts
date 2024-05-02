import { loadJsonFile } from "load-json-file";
import path from "path";
import { csvToJsObject, searchFiles } from "support/utils/utils";

export type FileDetails = {
  baseName: string;
  mockFileName: string;
  fileType: string;
  filePath: string;
};

export default class Configurator {
  private mockPrefix = "mock";

  private fileLoader(directory: string = "default"): FileDetails[] {
    try {
      let directoryPath: string;

      if (directory === "default") {
        // load project root directory
        directoryPath = path.resolve(process.cwd());
      } else {
        directoryPath = directory;
      }

      const files = searchFiles(directoryPath, [".json", ".csv"], ["node_modules"]);

      // returns files that contains mock data prefix
      // expects mock data prefix to be the last string after file extension
      const mockFiles = files.filter((file) => {
        const splitName = path.basename(file).split(".");
        return splitName[splitName.length - 2] === this.mockPrefix;
      });

      return mockFiles.map((file) => {
        const baseName = path.basename(file);
        const extension = path.extname(file);
        const fileName = baseName.replace("." + this.mockPrefix, "").replace(extension, "");

        return {
          baseName: baseName,
          mockFileName: fileName,
          fileType: extension.replace(".", ""),
          filePath: file
        };
      });
    } catch (error) {
      console.log(error);
    }
  }

  private async applyFilter(data: object[], { include, exclude }: { include: string[]; exclude: string[] }) {
    try {
      const includeList = data.map((data) => {
        const mappedData = {};
        for (const [key, value] of Object.entries(data)) {
          if (include?.length > 0 && !include.includes(key)) {
            continue;
          }

          mappedData[key] = value;
        }
        return mappedData;
      });

      return includeList.map((data) => {
        const mappedData = {};
        for (const [key, value] of Object.entries(data)) {
          if (exclude?.includes(key)) {
            continue;
          }

          mappedData[key] = value;
        }
        return mappedData;
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getFormData(dataFileName: string, { include, exclude }: { include?: string[]; exclude?: string[] } = {}): Promise<FormData[]> {
    try {
      const formData = [];
      let mockData;
      const files = this.fileLoader();

      for (const file of files) {
        if (file.mockFileName === dataFileName) {
          if (file.fileType === "csv") {
            mockData = await this.applyFilter(await csvToJsObject(file.filePath), { include, exclude });
          } else if (file.fileType === "json") {
            mockData = await this.applyFilter(await loadJsonFile(file.filePath), { include, exclude });
          }
        }
      }

      if (!mockData) return;

      for (const data of mockData) {
        const form = new FormData();
        for (const [key, value] of Object.entries(data)) {
          form.append(key, value as string);
        }
        formData.push(form);
      }

      return formData;
    } catch (error) {
      console.log(error);
    }
  }
}
