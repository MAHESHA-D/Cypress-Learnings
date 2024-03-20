

describe("Describe block", () => {
    //only() is used to test specific test script
  it.only("Login with valid credentials", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("#username").type("student");
    cy.get("#password").type("Password123");
    cy.get('#submit').click()
    cy.get('.wp-block-button__link').click()
  });

  it.skip("Login with invalid credentials", () => {
    //skip() is used to skip the specific testing script
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("#username").type("Student");
    cy.get("#password").type("Password12");
    cy.get('#submit').click()
    cy.get('.wp-block-button__link').click()
  });

  it(" valid username invalid password ", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("#username").type("student");
    cy.get("#password").type("Password12");
    cy.get('#submit').click()
    cy.get('.wp-block-button__link').click()
  });

  it(" invalid username invalid password ", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("#username").type("Student");
    cy.get("#password").type("Password12");
    cy.get('#submit').click()
    cy.get('.wp-block-button__link').click()
  });
});
