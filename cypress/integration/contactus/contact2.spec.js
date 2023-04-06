///<reference types="cypress"/>

describe('Verify the contact us form',()=>{
    it('Verify the contact form with valid detsils',()=>{
        cy.visit('https://codenboxautomationlab.com/contact/')
        cy.get('#nf-field-1').type('Ajit Gode')
        cy.get('#nf-field-2').type('abc12@gmail.com')
        cy.get('#nf-field-3').type('Hello , i am from pune')
        cy.get('#nf-field-4').click()
        cy.wait(13000)
        cy.get('.nf-response-msg > p',{timeout:14000}).first().should('have.text','Form submitted successfully.')
        cy.get('.nf-response-msg').children().eq(1).should('have.text','A confirmation email was sent to abc12@gmail.com.')
    })
})