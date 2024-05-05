import { WoocommerceMockMethods } from "support/types/global";
import MockApiUtil from "./mock-api-util";

export default class WoocommerceMockDataApi extends MockApiUtil implements WoocommerceMockMethods {
  private baseUrl: string;

  constructor({ baseUrl }: { baseUrl: string }) {
    super();
    this.baseUrl = baseUrl;
  }

  async createProduct(requestBody: FormData) {
    try {
      // API Reference: https://woocommerce.github.io/woocommerce-rest-api-docs/?javascript#products
      const response = await this.request.post(`${this.baseUrl}/wp-json/wc/v3/products`, requestBody);
      return await response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async enableTax(isEnabled: boolean) {
    try {
      const payload = {
        value: isEnabled === true ? "yes" : "no"
      };
      await this.request.put(`${this.baseUrl}/wp-json/wc/v3/settings/general/woocommerce_calc_taxes`, payload);
    } catch (error) {
      console.log(error);
    }
  }
}
