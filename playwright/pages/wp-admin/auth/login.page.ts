import { Page } from "@playwright/test";

const selectors = {
  usernameField: "#user_login",
  passwordField: "#user_pass",
};

export default class WpLoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
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
}
