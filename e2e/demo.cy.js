
describe('template spec', () => {
  it('Assertions demo', () => {
    cy.visit('https://example.cypress.io')
    cy.wait(2000)

    //implicit assretions
    cy.contains('get').click()
    cy.get('#query-btn')
        .should('contain','Button')
        .should('have.id','query-btn')
        .and('be.visible') //we can try and instead of should so it will follow the should 
        // .should('have.id','query-btn')
        // .should('be.visible')
       // .should('be.disabled')

       //explicit assertions
       expect(true).to.be.true
      // expect(false).to.be.true
      // expect(true).to.be.flase

      assert.equal(2, 2,'EQUAL')
      //assert.equal(2, 4,'NOT EQUAL')
      assert.equal(2, '2','EQUAL') //it will take both number and sting value same
      //assert.strictEqual(2, '2','EQUAL') It will check both should equal type

      
  })
})
