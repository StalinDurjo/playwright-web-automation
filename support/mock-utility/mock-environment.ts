import { Mode } from "support/types/global";
import WoocommerceMockDataApi from "./api/woocommerce-api-util";

export default class MockEnvironment {
  private baseUrl: string;
  private mode: Mode;
  private woocommerceDataApi: WoocommerceMockDataApi;

  constructor({ baseUrl }: { baseUrl: string }) {
    this.baseUrl = baseUrl;
    this.woocommerceDataApi = new WoocommerceMockDataApi({ baseUrl: this.baseUrl });
  }

  useMode(mode: Mode) {
    this.mode = mode;
  }

  setBasicAuth(username: string, password: string) {
    this.woocommerceDataApi.setBasicAuth(username, password);
  }

  async enableTax(isTaxEnabled: boolean) {
    try {
      if (this.mode === "API") {
        await this.woocommerceDataApi.enableTax(isTaxEnabled);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
