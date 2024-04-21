import { Page } from "@playwright/test";
import PageView from "./pages/pageView.page";

export default class WpFrontendPage {
  private page: Page;
  readonly pageView: PageView;

  constructor(page: Page) {
    this.page = page;
    this.pageView = new PageView(this.page);
  }
}
