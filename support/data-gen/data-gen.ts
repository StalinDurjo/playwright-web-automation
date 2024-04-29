import { DataGenMode } from "support/types/global";
import ApiData from "./api-data";
import DataConfig from "./data-config";

export default class DataGen {
  private baseUrl: string;
  private mode: DataGenMode;
  private basicAuthUsername: string;
  private basicAuthPassword: string;
  readonly api: ApiData;
  private dataConfig: DataConfig;

  constructor() {
    this.api = new ApiData();
    this.dataConfig = new DataConfig();
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.api.setBaseUrl(this.baseUrl);
  }

  useMode(mode: DataGenMode) {
    this.mode = mode;
  }

  setBasicAuth(username: string, password: string) {
    this.basicAuthUsername = username;
    this.basicAuthPassword = password;
  }

  async createProducts() {
    const formDataList = await this.dataConfig.productsSeedData({ include: [], exclude: [] });

    if (this.mode === "API") {
      for (const formData of formDataList) {
        await this.api.createProduct(formData, { credentials: { username: this.basicAuthUsername, password: this.basicAuthPassword } });
      }
    }
  }
}
