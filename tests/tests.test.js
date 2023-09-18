import { test, expect } from "@playwright/test";
import { URL, user, MDPP, newResource } from "../variables/variablesCX";

test.describe("test ressources", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      "http://localhost/resources-utilization-viewer/app/resources_view.php"
    );
  });
  test("test", async ({ page }) => {});
});
