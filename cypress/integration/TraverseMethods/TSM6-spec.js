///<reference types="cypress"/>

describe('Verify the cypress traverse Methods',()=>{
    it('To remove DOM element(s) from the set of elements, use the .not() command.',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.cart > a').not('.cart-icon').should('have.length',3)
        cy.get('.cart > div').not('.cart-info').should('have.class','cart-preview')

    })
    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.cart-preview').prevAll().should('have.length',5)
        cy.get('.action-block').last().prevAll().should('have.length',4)
    })
    it.only('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.cart-preview').prevUntil('.blinkingText').should('have.length',4)
        cy.get('.checkoutKartModal').prevUntil('#root').should('have.length',4)
    })
})