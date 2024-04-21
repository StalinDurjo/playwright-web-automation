import BasePage from "@pages/base/base.page";
import { Page } from "@playwright/test";

const selectors = {
  usernameField: "#user_login",
  passwordField: "#user_pass"
};

export default class WpLoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.url = "/wp-login.php";
  }

  // arrange
  usernameInputField() {
    return this.page.locator(selectors.usernameField);
  }

  passwordInputField() {
    return this.page.locator(selectors.passwordField);
  }

  // action
  async enterUsername(username: string) {
    await this.usernameInputField().fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordInputField().fill(password);
  }

  async clickOnLogin() {
    await this.button("Log In").click();
  }
}
