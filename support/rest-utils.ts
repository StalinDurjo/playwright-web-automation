import Request from "support/utils/requests/request";

export default class RestUtils {
  private baseUrl: string;
  protected request: Request;

  constructor({ baseUrl }: { baseUrl: string }) {
    this.baseUrl = baseUrl;
    this.request = new Request();
    this.request.setContentType("application/json"); // default content type
  }

  setBasicAuth(username: string, password: string) {
    this.request.setBasicAuth(username, password);
  }

  async isTaxEnabled() {
    try {
      const response = await this.request.get(`${this.baseUrl}/wp-json/wc/v3/settings/general/woocommerce_calc_taxes`);

      return response.data?.value === "yes" ? true : false;
    } catch (error) {
      console.log(error);
    }
  }
}
