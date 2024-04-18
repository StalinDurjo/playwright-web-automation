import { test as base } from "@playwright/test";
import WpAdminPage from "../wp-admin/wp-admin.page";
import CommonPage from "./common.page";
import PageActions from "../../utils/page-actions/page-actions";

export const test = base.extend<{
  commonPage: CommonPage;
  wpAdminPage: WpAdminPage;
  pageActions: PageActions;
}>({
  commonPage: async ({ page }, use) => {
    await use(new CommonPage(page));
  },

  wpAdminPage: async ({ page }, use) => {
    await use(new WpAdminPage(page));
  },

  pageActions: async ({ page }, use) => {
    await use(new PageActions(page));
  },
});

export const expect = base.expect;
