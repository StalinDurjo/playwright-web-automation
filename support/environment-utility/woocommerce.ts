import BaseEnvironmentUtility from "./base-utility";

export default class WoocommerceEnvironmentUtility extends BaseEnvironmentUtility {
  constructor(baseUrl: string) {
    super(baseUrl);
  }

  async enableTax(isEnabled: boolean) {
    try {
      if (this.mode === "API") {
        const payload = {
          value: isEnabled === true ? "yes" : "no"
        };
        await this.request.put(`${this.baseUrl}/wp-json/wc/v3/settings/general/woocommerce_calc_taxes`, payload);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
