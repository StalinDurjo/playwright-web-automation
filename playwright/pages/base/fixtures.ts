import { test as base } from "@playwright/test";
import WpAdminPage from "../wp-admin/wp-admin.page";
import CommonPage from "./common.page";
import E2EActions from "../../utils/e2e-actions/e2e-actions";

export const test = base.extend<{
  commonPage: CommonPage;
  wpAdminPage: WpAdminPage;
  e2eActions: E2EActions;
}>({
  commonPage: async ({ page }, use) => {
    await use(new CommonPage(page));
  },

  wpAdminPage: async ({ page }, use) => {
    await use(new WpAdminPage(page));
  },

  e2eActions: async ({ page }, use) => {
    await use(new E2EActions(page));
  },
});

export const expect = base.expect;
