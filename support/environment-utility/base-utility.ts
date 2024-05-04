import { ContentType, MockUtilityDefault, Mode } from "support/types/global";
import Request from "support/utils/requests/request";

export default class BaseEnvironmentUtility {
  baseUrl: string;
  mode: Mode;
  request: Request;
  username: string;
  password: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.request = new Request();
    this.setContentType("application/json"); // default content type
  }

  useMode(mode: Mode) {
    this.mode = mode;
  }

  setBasicAuth(username: string, password: string) {
    this.username = username;
    this.password = password;
    this.request.setBasicAuth(this.username, this.password);
  }

  setContentType(contentType: ContentType) {
    this.request.setContentType(contentType);
  }
}
