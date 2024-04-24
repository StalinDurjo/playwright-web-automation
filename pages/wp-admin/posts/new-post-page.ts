import BasePage from "@pages/base/base.page";
import { Page } from "@playwright/test";

export default class NewPostPage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.url = "/wp-admin/post-new.php";
  }
}
