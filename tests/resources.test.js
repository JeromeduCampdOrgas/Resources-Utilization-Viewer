import { test, expect } from "@playwright/test";
import { URL, user, MDPP, newResource } from "../variables/variablesCX";

test.describe.only("test_connexion", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });
  test("Ajouter une ressource", async ({ page }) => {
    /*const newResourceId = newResource.id;
    //Etape 1: connexion Administrateur
    await expect(page).toHaveURL(/.*signIn=1/);
    await page.locator("#username").fill(user);
    await page.locator("#password").fill(MDPP);
    await page.locator("#submit").click();
    await expect(page).toHaveURL(/.*index.php/);
    //Etape 2:clique sur le  bloc-menu "Resources"
    await page.getByRole("link", { name: "Resources", exact: true }).click();
    //Etape3 : cliquer sur ajouter et renseigner les champs
    await page.locator(".pull-left #addNew").click();
    await page.locator("#Name").fill(newResourceId);
    const checkBox = await page.locator("#Available");
    await expect(checkBox).toHaveAttribute("value", "1");
    await page.locator("#insert").click();
    await page.locator("#update").click();
    //retour à la liste
    await page.goto(URL);
    await page.getByRole("link", { name: "Resources", exact: true }).click();
    //Etape 4: vérification de la création du nouveau collaborateur
    const locator = page.getByRole("link").getByText("userTest");
    await locator.click();

    //Etape 5: suppression du nouveau collaborateur

    page.once("dialog", (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.locator("#delete").click();*/
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
    const dispo = await page.locator("#Available");
    await dispo.uncheck();
    await page.getByRole("button", { name: " Sauvegarder" }).click();
    /********************************************* */
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
    /******************************************** */
    /*await page.getByRole("button", { name: " Sauvegarder" }).click();

    //Retour à la liste
    await page.getByRole("button", { name: " Retour" }).click();

    //Suppression nouvelle ressource

    await page.getByRole("link", { name: "test2test2" }).click();
    await page.getByLabel("Name").click();
    page.once("dialog", (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.accept().catch(() => {});
    });
    await page.getByRole("button", { name: " Effacer" }).click();*/
  });
});
