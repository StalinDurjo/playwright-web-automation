import { Page } from "@playwright/test";
import WpLoginPage from "./auth/login.page";
import SidebarPage from "./navigation/sidebar.page";
import GeneralSettingsPage from "./settings/general-settings.page";

export default class WpAdminPage {
  private page: Page;
  readonly login: WpLoginPage;
  readonly sidebar: SidebarPage;
  readonly generalSettings: GeneralSettingsPage;

  constructor(page: Page) {
    this.page = page;
    this.login = new WpLoginPage(this.page);
    this.sidebar = new SidebarPage(this.page);
    this.generalSettings = new GeneralSettingsPage(this.page);
  }
}
