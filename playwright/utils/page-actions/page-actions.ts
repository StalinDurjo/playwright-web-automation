import { Page } from "@playwright/test";
import WordpressActions from "./wordpress-actions";
import WoocommerceActions from "./woocommerce-actions";

export default class PageActions {
  private page: Page;
  readonly wordpress: WordpressActions;
  readonly woocommerce: WoocommerceActions;

  constructor(page: Page) {
    this.page = page;
    this.wordpress = new WordpressActions(this.page);
    this.woocommerce = new WoocommerceActions(this.page);
  }
}
