///<reference types="cypress"/>

describe('Verify the contactus functionality',()=>{
    beforeEach(()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    })
    it('verify contactus with valid details',()=>{
         cy.get('[name="first_name"]').type('Ajit')
         cy.get('[name="last_name"]').type('Gode')
         cy.get('[name="email"]').type('abc@gmail.com')
         cy.get('[name="message"]').type('I m learing cypress')
         cy.get('[value="SUBMIT"]').click()
         cy.url().should('contain','contact-form-thank-you.html')
         cy.get('#contact_reply > h1').should('contain','Thank You for your Message!')
    })
    it('verify contactus form with invalid credentials',()=>{
        cy.get('[name="first_name"]').type('Ajit')
        cy.get('[name="last_name"]').type('Gode')
        cy.get('[name="email"]').type('abcgmail.com')
        cy.get('[name="message"]').type('I m learing cypress')
        cy.get('[value="SUBMIT"]').click()
        cy.get('body').should('contain',' Error: Invalid email address')
    })
    it.only('Verify the contactus form for reset button',()=>{
        cy.get('[name="first_name"]').type('Ajit')
        cy.get('[name="last_name"]').type('Gode')
        cy.get('[name="email"]').type('abc@gmail.com')
        cy.get('[name="message"]').type('I m learing cypress')
        cy.get('[value="RESET"]').click()

        cy.get('[name="first_name"]').should('have.text','')
        cy.get('[name="last_name"]').should('have.text','')
        cy.get('[name="email"]').should('have.text','')
        cy.get('[name="message"]').should('have.text','')
    })
})