import { test, expect } from "@playwright/test";
import { URL, user, MDPP, newResource } from "../variables/variablesCX";

test.describe.only("test_connexion", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });
  test("Ajouter une ressource", async ({ page }) => {
    await page.goto(
      "http://localhost/resources-utilization-viewer/app/index.php"
    );
    await page.goto(
      "http://localhost/resources-utilization-viewer/app/index.php?signIn=1"
    );
    //Connexion
    await page.getByPlaceholder("ID utilisateur").click();
    await page.getByPlaceholder("ID utilisateur").fill(user);
    await page.getByPlaceholder("Mot de passe").click();
    await page.getByPlaceholder("Mot de passe").fill(MDPP);
    await page.getByRole("button", { name: "Ouvrir une session" }).click();
    //Accès gestion ressources
    await page.getByRole("link", { name: "Resources", exact: true }).click();
    //Ajout ressource
    await page.getByRole("button", { name: " Ajouter" }).click();
    await page.locator("#Name").fill("test2");
    await page.getByRole("button", { name: " Sauvegarder" }).click();
    await page.getByRole("button", { name: " Sauvegarder" }).click();
    //Retour à la liste
    await page.getByRole("button", { name: " Retour" }).click();
    //Modification ressource
    await page.getByRole("link", { name: "test2" }).click();
    await page.getByLabel("Name").click();
    await page.getByLabel("Name").fill("test2test2");
    await page.getByRole("button", { name: " Sauvegarder" }).click();

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
      .getByRole("button", { name: " Retour" })
      .click();
    /********** Uncheck dispo*********************** */
    await page.locator("#Available").uncheck();
    await page.getByRole("button", { name: " Sauvegarder" }).click();
    //Reour tableau de bord
    await page.getByRole("button", { name: " Retour" }).click();

    //Accès gestion ressources
    await page.getByRole("link", { name: "Resources", exact: true }).click();
    //Retour au tableau de bord
    await page.getByRole("link", { name: " Resources Utilization" }).click();
    //
    await page.getByRole("link", { name: "Assignments", exact: true }).click();
    await page.getByRole("link", { name: "test2test2" }).click();
    //Activation accès boîte de dialogue
    page.on("dialog", (dialog) => dialog.accept());
    await page.getByRole("button", { name: " Effacer" }).click();

    //Suppression nouvelle ressource
    //Retour au tableau de bord
    await page.getByRole("link", { name: " Resources Utilization" }).click();
    await page.getByRole("link", { name: "Resources", exact: true }).click();
    await page.getByRole("link", { name: "test2test2" }).click();
    await page.getByLabel("Name").click();
    page.once("dialog", (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.accept().catch(() => {});
    });
    await page.getByRole("button", { name: " Effacer" }).click();
  });
});
