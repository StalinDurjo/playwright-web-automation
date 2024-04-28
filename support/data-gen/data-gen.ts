import { DataGenMode } from "support/types/global";
import ApiDataGen from "./api-data";
import DataConfig from "./data-config";

export default class DataGen {
  private baseUrl: string;
  private mode: DataGenMode;
  private basicAuthUsername: string;
  private basicAuthPassword: string;
  private apiDataGen: ApiDataGen;
  private dataConfig: DataConfig;

  constructor() {
    this.apiDataGen = new ApiDataGen();
    this.dataConfig = new DataConfig();
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.apiDataGen.setBaseUrl(this.baseUrl);
  }

  useMode(mode: DataGenMode) {
    this.mode = mode;
  }

  setBasicAuth(username: string, password: string) {
    this.basicAuthUsername = username;
    this.basicAuthPassword = password;
  }

  async createProducts() {
    const formDataList = await this.dataConfig.productsFormData();

    if (this.mode === "API") {
      this.apiDataGen.setBasicAuth(this.basicAuthUsername, this.basicAuthPassword);

      for (const formData of formDataList) {
        await this.apiDataGen.createProduct(formData, { credentials: { username: this.basicAuthUsername, password: this.basicAuthPassword } });
      }
    }
  }
}
