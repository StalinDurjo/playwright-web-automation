import { test, expect } from "../pages/base/fixtures";

test.describe("test", async () => {
  test.beforeEach(async ({ page }) => {});

  test("has title", async ({ page, commonPage, wpAdminPage, e2eActions }) => {
    await page.goto("http://localhost:9999/wp-login.php");
    await wpAdminPage.login.enterUsername("admin");
    await wpAdminPage.login.enterPassword("password");
    await commonPage.clickOnLogin();

    await e2eActions.setAnyoneCanRegister(true);

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });
});
