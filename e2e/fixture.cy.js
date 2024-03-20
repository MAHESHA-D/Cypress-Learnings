describe("Fixtures Demo", () => {
  //Direct Access
  it.skip("Fixtures Direct access", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();
    cy.get(".oxd-topbar-header-title").should("have.text", "Dashboard");
  });

  //Accessing Data from Fixture file
  it.skip("Accessing data from fixture file", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.fixture("OrangeHRM").then((data) => {
      cy.get("input[placeholder='Username']").type(data.username);
      cy.get("input[placeholder='Password']").type(data.password);
      cy.get("button[type='submit']").click();
      cy.get(".oxd-topbar-header-title").should("have.text", data.expected);
    });
  });

  //Accessing through hooks - multiple it blocks

  let userdata;
  before(() => {
    cy.fixture("OrangeHRM").then((data) => {
      userdata = data;
    });
  });
  it("Fixtures for multiple it block", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("input[placeholder='Username']").type(userdata.username);
    cy.get("input[placeholder='Password']").type(userdata.password);
    cy.get("button[type='submit']").click();
    cy.get(".oxd-topbar-header-title").should("have.text", userdata.expected);
  });
});
