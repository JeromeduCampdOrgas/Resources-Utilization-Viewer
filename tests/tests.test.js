import { test, expect } from "@playwright/test";
import { URL, user, MDPP, newResource } from "../variables/variablesCX";

test("test", async ({ page }) => {
  /*await page.goto(
    "http://localhost/resources-utilization-viewer/app/index.php"
  );*/
  await page.goto(URL);
  await page.getByPlaceholder("ID utilisateur").click();
  await page.getByPlaceholder("ID utilisateur").fill(user);
  await page.getByPlaceholder("ID utilisateur").press("Tab");
  await page.getByPlaceholder("Mot de passe").fill(MDPP);
  await page.getByRole("button", { name: "Ouvrir une session" }).click();
  await page.getByRole("link", { name: "Resources", exact: true }).click();
  await page.getByRole("button", { name: " Ajouter" }).click();
  await page.getByRole("button", { name: " Sauvegarder" }).click();
  await page.getByLabel("Available").uncheck();
  await page.getByRole("link", { name: " Ajouter" }).click();
  await page
    .frameLocator("iframe")
    .locator("#s2id_ProjectId-container")
    .getByRole("link")
    .click();
  await page.frameLocator("iframe").getByText("Projet 3").click();
  await page
    .frameLocator("iframe")
    .getByRole("button", { name: " Sauvegarder" })
    .click();
  await page
    .frameLocator("iframe")
    .getByRole("button", { name: " Sauvegarder" })
    .click();
  await page
    .frameLocator("iframe")
    .getByRole("button", { name: " Retour" })
    .click();
  await page.getByRole("button", { name: " Sauvegarder" }).click();
  await page.getByRole("button", { name: " Retour" }).click();
  await page.getByRole("link", { name: "test2" }).click();
  await page.getByLabel("Name").click();
  await page.getByLabel("Name").fill("test2test2");
  await page.getByRole("button", { name: " Sauvegarder" }).click();
  await page.getByRole("button", { name: " Retour" }).click();
  await page.getByRole("link", { name: "test2test2" }).click();
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: " Effacer" }).click();
  await page.getByRole("link", { name: " Assignments" }).click();
  await page.getByRole("link", { name: "Projet 3" }).click();

  await page.getByRole("button", { name: " Effacer" }).click();
  await page.getByRole("link", { name: " Resources Utilization" }).click();
  await page.getByRole("link", { name: "Resources", exact: true }).click();
  await page.getByRole("link", { name: "test2test2" }).click();
  page.on("dialog", (dialog) => dialog.accept());
  await page.getByRole("button", { name: " Effacer" }).click();
});
