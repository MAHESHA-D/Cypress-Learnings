import { LoginPage, POM_Login } from "./Pages/POM_login";

const login = new LoginPage();

it("POM LOGIN DEMO", () => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  login.enterUsername("Admin");
  login.enterPassword("admin123");
  login.clickLogin();

  // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
  // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
  // cy.get('.oxd-button').click()
});
