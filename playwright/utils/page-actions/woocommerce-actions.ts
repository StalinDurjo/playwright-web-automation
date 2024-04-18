import { Page } from "@playwright/test";

export default class WoocommerceActions {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
