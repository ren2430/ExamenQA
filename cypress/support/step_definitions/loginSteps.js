
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../pages/LoginPage";

Given("que el usuario navega al portal de AutomationExercise", () => {
  loginPage.navigate();
});

When("ingresa su correo y contraseña válidos", () => {
  cy.fixture("usuarios").then((data) => {
    loginPage.login(data.validUser.email, data.validUser.password);
  });
});

When("ingresa un correo o contraseña incorrectos", () => {
  cy.fixture("usuarios").then((data) => {
    loginPage.login(data.invalidUser.email, data.invalidUser.password);
  });
});

When("deja los campos de correo y contraseña vacíos", () => {
  loginPage.login(" ", " ");
});

Then("debe ver el mensaje {string} en el encabezado", (msg) => {
  loginPage.elements.loggedInText().should("contain.text", msg);
});

Then("debe mostrarse el mensaje de error {string}", (msg) => {
  loginPage.elements.errorMsg().should("contain.text", msg);
});

Then("debe permanecer en la misma página de Login", () => {
  cy.url().should("include", "/login");
});
