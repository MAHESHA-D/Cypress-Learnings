
it('assertions demo',()=>{

    cy.visit('https://example.cypress.io')
    //Implicit assertion
    cy.contains('get').click()
    cy.get('#query-btn')
        .should('contain','Button')
        .and('have.class','query-btn') //and command used to chain the assertion to follow same as above command
        .and('be.enabled') 
       // .and('be.disabled')

    //Explicit assertion
    expect(true).to.be.true
   // expect(true).to.be.false
   //assert.equal(4, 5, 'NOT EQUAL')
   assert.equal(4, 4, 'EQUAL')
   assert.equal(4, '4', ' EQUAL')
   assert.notEqual(4, '3', 'NOT EQUAL')
  // assert.strictEqual(4, '4', 'EQUAL')
  //assert.strictEqual(4, '5', 'NOT EQUAL') //StrictEqual checks equal value and type 



})