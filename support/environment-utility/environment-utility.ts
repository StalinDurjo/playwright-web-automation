import { Mode } from "support/types/global";
import WoocommerceEnvironmentUtility from "./woocommerce";

export default class EnvironmentUtility {
  readonly woocommerce: WoocommerceEnvironmentUtility;

  constructor({ baseUrl }: { baseUrl: string }) {
    this.woocommerce = new WoocommerceEnvironmentUtility(baseUrl);
  }

  useMode(mode: Mode) {
    this.woocommerce.useMode(mode);
  }

  setBasicAuth(username: string, password: string) {
    this.woocommerce.setBasicAuth(username, password);
  }
}
