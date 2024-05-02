import MockApi from "./mock-api";

export default class WoocommerceMockApi extends MockApi {
  constructor() {
    super();
  }

  async createProduct(requestBody: FormData) {
    try {
      this.setContentType("multipart/form-data");
      const response = await this.request.post(`${this.baseUrl}/wp-json/wc/v3/products`, requestBody);
      return await response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
