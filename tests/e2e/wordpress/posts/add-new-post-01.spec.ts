import { expect, test } from "@pages/base/fixtures";
import RequestUtils from "support/utils/requests/request-actions";

let postId: number;
let requestUtils: RequestUtils;

test.describe.only("Posts", async () => {
  test.beforeEach(async ({ wpAdminPage, pageActions }, testInfo) => {
    requestUtils = new RequestUtils({ baseUrl: testInfo.project.use.baseURL });
    await wpAdminPage.login.goto();
    await pageActions.wordpress.login("admin", "password");
  });

  test.afterEach(async () => {
    await requestUtils.deletePost(postId);
  });

  test("Admin is able to add new post by filling only post title", async ({ page, wpAdminPage, wpFrontendPage }) => {
    await wpAdminPage.post.allPost.goto();
    await wpAdminPage.post.allPost.clickOnAddNewPost();

    const pageTitle = "Test Post Title";

    await wpAdminPage.post.newPost.enterPostTitle(pageTitle);
    await wpAdminPage.post.newPost.clickOnPublish();
    await wpAdminPage.post.newPost.clickOnPublishConfirm();

    // return postId, so that it can be deleted after test
    const response = await page.waitForResponse("**/wp-json/wp/v2/posts/*");
    postId = await (await response.json()).id;

    await wpAdminPage.post.newPost.clickOnViewPostLink();

    const createdPostTitle = await wpFrontendPage.pageView.blockPostTitle().textContent();
    expect(createdPostTitle).toEqual(pageTitle);
  });
});
