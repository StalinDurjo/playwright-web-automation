import { ContentType } from "support/types/global";
import Request from "support/utils/requests/request";

export default class MockApi {
  baseUrl: string;
  request: Request;

  constructor() {
    this.request = new Request();
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  setBasicAuth(username: string, password: string) {
    this.request.setBasicAuth(username, password);
  }

  setContentType(contentType: ContentType) {
    this.request.setContentType(contentType);
  }
}
