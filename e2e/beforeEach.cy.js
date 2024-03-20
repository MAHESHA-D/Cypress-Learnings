beforeEach(function () {
  cy.visit("https://practicetestautomation.com/practice-test-login/");
});
describe("BeforeEach", () => {
  //only() is used to test specific test script

  it.only("Login with valid credentials", () => {
    cy.get("#username").type("student");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();
    cy.get(".wp-block-button__link").click();
  });

  it("Login with invalid credentials", () => {
    //skip() is used to skip the specific testing script
    cy.get("#username").type("Student");
    cy.get("#password").type("Password12");
    cy.get("#submit").click();
    cy.get(".wp-block-button__link").click();
  });
});
