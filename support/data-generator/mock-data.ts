import { Mode } from "support/types/global";
import WoocommerceMockApi from "./api/wc-mock-api";
import WordpressMockApi from "./api/wp-mock-api";
import Configurator from "./configurator";

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

  async createProducts({ limit }: { limit?: number } = {}) {
    try {
      const formData = await this.configurator.getFormData("products", {
        include: [
          "name",
          "type",
          "status",
          "featured",
          "catalog_visibility",
          "short_description",
          "description",
          "regular_price",
          "sale_price",
          "date_on_sale_from",
          "date_on_sale_to",
          "tax_status"
        ]
      });
      const limitedFormData = limit || limit === 0 ? formData.splice(0, limit) : formData;
      console.log(limitedFormData[1]);

      if (this.mode === "API") {
        for (const form of limitedFormData) {
          this.woocommerceApi.setBaseUrl(this.baseUrl);
          this.woocommerceApi.setBasicAuth(this.username, this.password);
          this.woocommerceApi.createProduct(form);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}
