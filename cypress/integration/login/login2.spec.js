///<reference types="cypress"/>
describe('verify the login functionality with  invalid credentials',()=>{
    it('TSC01-invalid credentilas',()=>{
        cy.visit('http://localhost/Blood_Bank/admin.php')
        cy.get('#user').type('Admin')
        cy.get('#pass').type('Admin123')
        cy.get('button[type="submit"]').click()
        cy.get('.alert.alert-danger>b').should('have.text','Error')
    })
})