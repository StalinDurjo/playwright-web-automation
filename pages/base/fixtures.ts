import { test as base } from "@playwright/test";
import WpAdminPage from "../wp-admin/wp-admin.page";
import CommonPage from "./common.page";
import WpFrontendPage from "@pages/wp-frontend/wp-frontend.page";
import PageActions from "support/page-actions/page-actions";

export const test = base.extend<{
  commonPage: CommonPage;
  wpAdminPage: WpAdminPage;
  wpFrontendPage: WpFrontendPage;
  pageActions: PageActions;
}>({
  commonPage: async ({ page }, use) => {
    await use(new CommonPage(page));
  },

  wpAdminPage: async ({ page }, use) => {
    await use(new WpAdminPage(page));
  },

  wpFrontendPage: async ({ page }, use) => {
    await use(new WpFrontendPage(page));
  },

  pageActions: async ({ page }, use) => {
    await use(new PageActions(page));
  }
});

export const expect = base.expect;
