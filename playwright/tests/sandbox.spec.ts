import { test, expect } from "../pages/base/fixtures";

test.describe("test", async () => {
  test.beforeEach(async ({ page }) => {});

  test("has title", async ({ page, commonPage, wpAdminPage, pageActions }) => {
    await page.goto("/wp-login.php");
    await wpAdminPage.login.enterUsername("admin");
    await wpAdminPage.login.enterPassword("password");
    await commonPage.clickOnLogin();

    // await pageActions.wordpress.setAnyoneCanRegister(true);
    await pageActions.wordpress.setPermalinksStructure("Post name");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });
});
