import { Page } from "@playwright/test";
import CommonPage from "../../pages/base/common.page";
import WpAdminPage from "../../pages/wp-admin/wp-admin.page";

export default class E2EActions {
  private page: Page;
  private commonPage: CommonPage;
  private wpAdminPage: WpAdminPage;

  constructor(page: Page) {
    this.page = page;
    this.commonPage = new CommonPage(this.page);
    this.wpAdminPage = new WpAdminPage(this.page);
  }

  async setAnyoneCanRegister(enabled: boolean) {
    await this.commonPage.goto("/wp-admin/options-general.php");

    if (enabled) {
      await this.wpAdminPage.generalSettings.membershipCheckbox().check();
    } else {
      await this.wpAdminPage.generalSettings.membershipCheckbox().uncheck();
    }

    await this.commonPage.clickOnSaveChanges();
  }
}
