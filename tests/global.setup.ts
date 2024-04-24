import { test } from "@pages/base/fixtures";

test.skip("Setup", async ({ page, pageActions }) => {
  await pageActions.wordpress.login("admin", "password");
  // change permalink structure
  await pageActions.wordpress.setPermalinksStructure("Post name");
  // set anyone can register to true
  await pageActions.wordpress.setAnyoneCanRegister(true);
});
