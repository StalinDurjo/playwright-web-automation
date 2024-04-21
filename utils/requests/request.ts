import axios, { AxiosInstance } from "axios";

export default class Request {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create();
  }

  setBearerToken(token: string) {
    this.instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  setBasicAuth(username: string, password: string) {
    this.instance.defaults.headers.common["Authorization"] = `Basic ${btoa(`${username}:${password}`)}`;
  }

  get(requestPath: string, queryString: string = "") {
    return this.instance.get(requestPath, {
      params: queryString
    });
  }

  post(requestPath: string, requestBody: unknown) {
    return this.instance.post(requestPath, requestBody);
  }

  put(requestPath: string, requestBody: unknown) {
    return this.instance.put(requestPath, requestBody);
  }

  delete(requestPath: string, queryString: string = "") {
    return this.instance.delete(requestPath, { params: queryString });
  }
}
