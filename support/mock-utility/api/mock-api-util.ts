import { ContentType } from "support/types/global";
import Request from "support/utils/requests/request";

export default class MockApiUtil {
  protected request: Request;

  constructor() {
    this.request = new Request();
  }

  setBasicAuth(username: string, password: string) {
    this.request.setBasicAuth(username, password);
  }

  setContentType(contentType: ContentType) {
    this.request.setContentType(contentType);
  }
}
