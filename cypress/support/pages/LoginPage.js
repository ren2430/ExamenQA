
class LoginPage {
  elements = {
    emailInput: () => cy.get('input[data-qa="login-email"]'),
    passwordInput: () => cy.get('input[data-qa="login-password"]'),
    loginButton: () => cy.get('button[data-qa="login-button"]'),
    errorMsg: () => cy.contains('Your email or password is incorrect!'),
    loggedInText: () => cy.contains('Logged in as'),
  };

  navigate() {
    cy.visit('https://www.automationexercise.com/login');
  }

  login(email, password) {
    this.elements.emailInput().type(email);
    this.elements.passwordInput().type(password);
    this.elements.loginButton().click();
  }
}

export const loginPage = new LoginPage();
