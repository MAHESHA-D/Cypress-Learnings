it("Data Driven Test", () => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  cy.fixture("OrangeHRM2").then((data) => {
    data.forEach((userdata) => {
      cy.get("input[placeholder='Username']").type(userdata.username);
      cy.get("input[placeholder='Password']").type(userdata.password);
      cy.get("button[type='submit']").click();

      if (userdata.username == "Admin" && userdata.password == "admin123") {
        cy.get(".oxd-topbar-header-title").should(
          "have.text",
          userdata.expected
        );
        cy.wait(2000);
        //logout
        cy.get(".oxd-userdropdown-tab").click();
        cy.get(":nth-child(4) > .oxd-userdropdown-link").click();
      } else {
        cy.get(".oxd-alert-content.oxd-alert-content--error").should(
          "have.text",
          userdata.expected
        );
      }
    });
  });
});
