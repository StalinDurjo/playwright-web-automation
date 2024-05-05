import { Mode } from "support/types/global";
import Configurator from "./configurator";
import WoocommerceMockDataApi from "./api/woocommerce-api-util";

export default class MockData {
  private baseUrl: string;
  private mode: Mode;
  private configurator: Configurator;
  private woocommerceDataApi: WoocommerceMockDataApi;

  constructor({ baseUrl }: { baseUrl: string }) {
    this.baseUrl = baseUrl;
    this.configurator = new Configurator();
    this.woocommerceDataApi = new WoocommerceMockDataApi({ baseUrl: this.baseUrl });
  }

  useMode(mode: Mode) {
    this.mode = mode;
  }

  setBasicAuth(username: string, password: string) {
    this.woocommerceDataApi.setBasicAuth(username, password);
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

      if (this.mode === "API") {
        for (const form of limitedFormData) {
          this.woocommerceDataApi.setContentType("multipart/form-data");
          await this.woocommerceDataApi.createProduct(form);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}
