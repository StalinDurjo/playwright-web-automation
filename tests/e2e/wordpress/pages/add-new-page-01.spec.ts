import { test, expect } from "@pages/base/fixtures";
import { request } from "@playwright/test";
import RequestUtils from "support/utils/requests/request-actions";

let pageId: number;
let requestUtils: RequestUtils;

test.describe.only("Pages", async () => {
  test.beforeEach(async ({ wpAdminPage, pageActions }, testInfo) => {
    requestUtils = new RequestUtils({ baseUrl: testInfo.project.use.baseURL });
    await wpAdminPage.login.goto();
    await pageActions.wordpress.login("admin", "password");
  });

  test.afterEach(async ({ page }) => {
    // await requestUtils.deletePage(pageId);
  });

  test("Admin can create a new page", async ({ page, wpAdminPage, wpFrontendPage }) => {
    await wpAdminPage.pages.allPages.goto();
    await wpAdminPage.pages.allPages.clickOnAddNewPage();

    // component modal is visible on new setup when no posts are created. Purpose of the following steps are to close the modal and continue tests as usual.
    // const elementCount = await (await wpAdminPage.pages.addPage.blockEditor.componentModalCloseButton()).count();

    // console.log(elementCount)

    // if (elementCount > 0) {
    //   await wpAdminPage.pages.addPage.blockEditor.closeComponentModal();
    // }

    const pageTitle = "Test Page";

    await wpAdminPage.pages.addPage.blockEditor.enterPostTitle(pageTitle);
    await wpAdminPage.pages.addPage.blockEditor.clickOnPublishButton();
    await wpAdminPage.pages.addPage.blockEditor.clickOnPublishConfirmButton();

    // return postId, so that it can be deleted after test
    // const response = await page.waitForResponse("**/wp-json/wp/v2/pages/*");
    // pageId = await (await response.json()).id;

    await wpAdminPage.pages.addPage.blockEditor.clickOnViewPageLink();

    const createdPostTitle = await wpFrontendPage.pageView.blockPostTitle().textContent();

    expect(createdPostTitle).toEqual(pageTitle);
  });
});
