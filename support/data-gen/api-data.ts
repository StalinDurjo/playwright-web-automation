import { ContentType } from "support/types/global";
import Request from "support/utils/requests/request";

type DefaultConfig = {
  credentials: {
    username: string;
    password: string;
  };
  contentType: ContentType;
};

export default class ApiDataGen {
  private baseUrl: string;
  private request: Request;

  constructor() {
    this.request = new Request();
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  setBasicAuth(username: string, password: string) {
    this.request.setBasicAuth(username, password);
  }

  setDefaults({ credentials: { username, password }, contentType }: DefaultConfig) {
    this.request.setBasicAuth(username, password);
    this.request.setContentType(contentType);
  }

  async createProduct(requestBody: FormData, { credentials: { username, password } }) {
    try {
      this.request.setBasicAuth(username, password);
      this.request.setContentType("multipart/form-data");
      const response = this.request.post(`${this.baseUrl}/wp-json/wc/v3/products`, requestBody);
      const data = await (await response).data;

      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
