it( 'Login page Test',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.wait(3000)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.wait(3000)
    cy.get('.oxd-button').click()
})