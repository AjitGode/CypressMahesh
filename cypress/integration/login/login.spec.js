///<reference types="cypress"/>

describe('Verify the login functionality',()=>{
    it('Verify login with valid credentilas',()=>{
        cy.visit('http://www.testyou.in/Login.aspx')
        cy.get('#ctl00_CPHContainer_txtUserLogin').type('ajitgode25')
        cy.get('#ctl00_CPHContainer_txtPassword').type('Ajit@9925')
        cy.get('#ctl00_CPHContainer_btnLoginn').click()
        cy.get('#ctl00_CPHContainer_spFirstName').should('have.text','ajit')
    })

    it.only('Verify the login with invalid credentials',()=>{
        cy.visit('http://www.testyou.in/Login.aspx')
        cy.get('#ctl00_CPHContainer_txtUserLogin').type('ajitgode24')
        cy.get('#ctl00_CPHContainer_txtPassword').type('Ajit@9924')
        cy.get('#ctl00_CPHContainer_btnLoginn').click()
        cy.get('#ctl00_CPHContainer_lblOutput').should('have.text','Userid or Password did Not Match !!')
    })
})