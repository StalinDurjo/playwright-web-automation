import { Page } from "@playwright/test";
import CommonPage from "../../pages/base/common.page";
import WpAdminPage from "../../pages/wp-admin/wp-admin.page";
import WpLoginPage from "@pages/wp-admin/auth/login.page";

type PermalinkStructure = {
  structure: "Plain" | "Day and name" | "Month and name" | "Numeric" | "Post name" | "Custom Structure";
};

export default class WordpressActions {
  private page: Page;
  private commonPage: CommonPage;
  private wpAdminPage: WpAdminPage;
  // private loginPage: WpLoginPage;

  constructor(page: Page) {
    this.page = page;
    this.commonPage = new CommonPage(this.page);
    this.wpAdminPage = new WpAdminPage(this.page);
    // this.loginPage = new WpLoginPage(this.page);
  }

  async login(username: string, password: string) {
    await this.wpAdminPage.login.goto();
    await this.wpAdminPage.login.enterUsername(username);
    await this.wpAdminPage.login.enterPassword(password);
    await this.wpAdminPage.login.clickOnLogin();
  }

  async setAnyoneCanRegister(enabled: boolean) {
    await this.page.goto("/wp-admin/options-general.php");

    if (enabled) {
      await this.wpAdminPage.generalSettings.membershipCheckbox().check();
    } else {
      await this.wpAdminPage.generalSettings.membershipCheckbox().uncheck();
    }

    await this.commonPage.clickOnSaveChanges();
  }

  async setPermalinksStructure(structure: PermalinkStructure["structure"], customStructure: string = "") {
    await this.page.goto("/wp-admin/options-permalink.php");

    switch (structure) {
      case "Plain":
        await this.page.locator("#permalink-input-plain").click();
        break;

      case "Day and name":
        await this.page.locator("#permalink-input-day-name").click();
        break;

      case "Month and name":
        await this.page.locator("#permalink-input-month-name").click();
        break;

      case "Numeric":
        await this.page.locator("#permalink-input-numeric").click();
        break;

      case "Post name":
        await this.page.locator("#permalink-input-post-name").click();
        break;

      case "Custom Structure":
        await this.page.locator("#custom_selection").click();
        await this.page.locator("#permalink_structure").clear();
        await this.page.locator("#permalink_structure").fill(customStructure);
        break;
    }

    await this.commonPage.clickOnSaveChanges();
  }
}
