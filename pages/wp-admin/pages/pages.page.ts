import BasePage from "@pages/base/base.page";
import { Page } from "@playwright/test";
import AllPagesPage from "./all-pages.page";
import AddPage from "./add-page.page";

export default class PagesPage extends BasePage {
  readonly allPages: AllPagesPage;
  readonly addPage: AddPage;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.allPages = new AllPagesPage(this.page);
    this.addPage = new AddPage(this.page);
  }
}
