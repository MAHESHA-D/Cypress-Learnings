
it('linkedin login', ()=>{
    cy.visit('https://in.linkedin.com/')
    cy.get('#session_key').type('dmnmahesh@gmail.com')
    cy.get('#session_password').type('dmnmahesh@18')
    cy.get('.justify-between > .btn-md').click()
    cy.get('#ember14 > .global-nav__primary-link-text').click()
    cy.get('.global-nav__secondary-item--divider > .global-nav__secondary-link').click()
    //cy.get('#ember283 > .artdeco-button__text').click()
})