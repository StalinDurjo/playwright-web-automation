import { test, expect } from "@pages/base/fixtures";
import { request } from "@playwright/test";
import requestUtils from "support/utils/requests/RequestUtils";

let pageId: number;

test.describe("Pages", async () => {
  test.beforeEach(async ({ wpAdminPage, pageActions }) => {
    await wpAdminPage.login.goto();
    await pageActions.wordpress.login("admin", "password");
  });

  test.afterEach(async ({ page }) => {
    await requestUtils.deletePage(pageId);
    // await page.waitForTimeout(5000);
  });

  test("Admin can create a new page", async ({ page, request, wpAdminPage, wpFrontendPage }) => {
    await wpAdminPage.pages.allPages.goto();
    await wpAdminPage.pages.allPages.clickOnAddNewPage();

    // component modal is visible on new setup when no posts are created. Purpose of the following steps are to close the modal and continue tests as usual.
    const elementCount = await (await wpAdminPage.pages.addPage.blockEditor.componentModalCloseButton()).count();

    if (elementCount > 0) {
      await wpAdminPage.pages.addPage.blockEditor.closeComponentModal();
    }

    const pageTitle = "Test Page 1";

    await wpAdminPage.pages.addPage.blockEditor.enterPostTitle(pageTitle);
    await wpAdminPage.pages.addPage.blockEditor.clickOnPublishButton();
    await wpAdminPage.pages.addPage.blockEditor.clickOnPublishConfirmButton();

    // return postId, so that it can be deleted after test
    const response = await page.waitForResponse("**/wp-json/wp/v2/pages/*");
    pageId = await (await response.json()).id;

    await wpAdminPage.pages.addPage.blockEditor.clickOnViewPageLink();

    const createdPostTitle = await wpFrontendPage.pageView.blockPostTitle().textContent();

    expect(createdPostTitle).toEqual(pageTitle);
  });
});
