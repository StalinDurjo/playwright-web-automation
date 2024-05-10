import { test } from "@pages/base/fixtures";
import { isSetupRequired } from "support/testability";

test.only("Setup", async ({ page, pageActions }, testInfo) => {
  if (process.env.CI || (await isSetupRequired(testInfo.project.use.baseURL))) {
    await pageActions.wordpress.login("admin", "password");
    // change permalink structure
    await pageActions.wordpress.setPermalinksStructure("Post name");
    // set anyone can register to true
    await pageActions.wordpress.setAnyoneCanRegister(true);
  }
});
