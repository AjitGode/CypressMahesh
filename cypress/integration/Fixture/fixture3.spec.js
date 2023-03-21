///<reference types="cypress"/>

describe('Verify the fixture file',()=>{
    it('Verify the fixture dtat with contactus',()=>{
        cy.visit('https://ajitgportfolio.co.in/#contactUs')
        cy.get('#name').type('Ajit Gode')
        cy.get('#email').type("godeajit71@gmail.com")
        cy.get('#mobile').type(8390889925)
        cy.get('#subject').type("Test Message")
        cy.get("#message").type('Test')
        cy.get('input[value="Send Message"]').click()
        cy.get('#swal2-title').should('have.text','Message Send Successfully!')
    })
})