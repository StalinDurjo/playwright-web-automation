import WoocommerceMockApi from "./api/wc-mock-api";
import WordpressMockApi from "./api/wp-mock-api";
import Configurator from "./configurator";

type Mode = "API" | "UI";

export default class MockData {
  private baseUrl: string;
  private username: string;
  private password: string;
  private mode: Mode;
  private configurator: Configurator;
  private wordpressApi: WordpressMockApi;
  private woocommerceApi: WoocommerceMockApi;

  constructor({ baseUrl }: { baseUrl: string }) {
    this.baseUrl = baseUrl;
    this.wordpressApi = new WordpressMockApi();
    this.woocommerceApi = new WoocommerceMockApi();
    this.configurator = new Configurator();
  }

  useMode(mode: Mode) {
    this.mode = mode;
  }

  setBasicAuth(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  async createProducts() {
    try {
      const formData = await this.configurator.getFormData("sample.products", { include: ["type", "description", "name"], exclude: ["name"] });
      console.log(formData[0]);
      if (this.mode === "API") {
        for (const form of formData) {
          this.woocommerceApi.setBaseUrl(this.baseUrl);
          this.woocommerceApi.setBasicAuth(this.username, this.password);
          // this.woocommerceApi.createProduct(form);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}
