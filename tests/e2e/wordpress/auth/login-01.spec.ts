import { test, expect } from "@pages/base/fixtures";

test.describe("WordPress Login", async () => {
  test.beforeEach(async ({ page }) => {});

  test("User successfully loggedin using valid credentials", async ({ page, wpAdminPage }) => {
    await wpAdminPage.login.goto();
    await wpAdminPage.login.enterUsername("admin");
    await wpAdminPage.login.enterPassword("password");
    await wpAdminPage.login.clickOnLogin();

    const dashboardTitle = await wpAdminPage.dashboard.pageTitle().textContent();
    expect(dashboardTitle).toEqual("Dashboard");
  });
});
