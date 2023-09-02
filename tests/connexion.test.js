import { test, expect } from "@playwright/test";
import { user, MDPP } from "../variables/variablesCX";

test.describe.only("ruv_test1", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      "http://localhost/resources-utilization-viewer/app/index.php"
    );
    //await page.locator('strong:has-text("Français")').click();
  });
  test("Connexion Passante", async ({ page }) => {
    await expect(page).toHaveURL(/.*signIn=1/);
    await page.locator("#username").fill(user);
    await page.locator("#password").fill(MDPP);
    await page.locator("#submit").click();
    await expect(page).toHaveURL(/.*index.php/);
    await page.locator(".navbar-right .btn-default").click();
    await expect(page).toHaveURL(/.*signIn=1/);
  });
  test("Connexion NP:id true, mdp false", async ({ page }) => {
    await page.locator("#username").fill(user);
    await page.locator("#password").fill(MDPP + "s");
    await page.locator("#submit").click();
    await expect(page.locator(".alert.alert-danger")).toBeVisible();
  });
  test("Connexion NP:id false, mdp true", async ({ page }) => {
    await page.locator("#username").fill(user + "s");
    await page.locator("#password").fill(MDPP);
    await page.locator("#submit").click();
    await expect(page.locator(".alert.alert-danger")).toBeVisible();
    //await page.pause();
  });
  test.only("Connexion NP:id true, mdp empty", async ({ page }) => {
    await page.locator("#username").fill(user);
    await page.locator("#password").fill("");
    await page.locator("#submit").click();
    await expect(page).toHaveURL(/.*signIn=1/);
    //await page.pause();
  });
});
