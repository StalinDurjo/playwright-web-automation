import { Mode } from "support/types/global";
import WoocommerceEnvironmentUtility from "./woocommerce";

export default class EnvironmentUtility {
  private baseUrl: string;
  private mode: Mode;
  private username: string;
  private password: string;
  readonly woocommerce: WoocommerceEnvironmentUtility;

  constructor({ baseUrl }: { baseUrl: string }) {
    this.baseUrl = baseUrl;
    this.woocommerce = new WoocommerceEnvironmentUtility(baseUrl);
  }

  useMode(mode: Mode) {
    this.mode = mode;
  }

  setBasicAuth(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
