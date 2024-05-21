import { Page } from "@playwright/test";
import WpLoginPage from "./auth/login.page";
import SidebarPage from "./navigation/sidebar.page";
import GeneralSettingsPage from "./settings/general-settings.page";
import DashboardPage from "./dashboard/dashboard.page";
import AllPagesPage from "./pages/all-pages.page";
import PagesPage from "./pages/pages.page";
import PostPage from "./posts/post.page";

export default class WpAdminPage {
  private page: Page;
  readonly login: WpLoginPage;
  readonly sidebar: SidebarPage;
  readonly generalSettings: GeneralSettingsPage;
  readonly dashboard: DashboardPage;
  readonly pages: PagesPage;
  readonly post: PostPage;

  constructor(page: Page) {
    this.page = page;
    this.login = new WpLoginPage(this.page);
    this.sidebar = new SidebarPage(this.page);
    this.generalSettings = new GeneralSettingsPage(this.page);
    this.dashboard = new DashboardPage(this.page);
    this.pages = new PagesPage(this.page);
    this.post = new PostPage(this.page);
  }
}
