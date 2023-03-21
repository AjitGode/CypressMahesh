///<reference types="cypress"/>

describe('verify the cypress traverse method',()=>{
    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',()=>{
       cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
       cy.get('.blinkingText').nextUntil('[href="https://rahulshettyacademy.com/dropdownsPractise/"]').should('have.length',1)
       cy.get('.cart-info').nextUntil('.cart-preview').should('have.length',1)
    })
    it.only('To get parents DOM element of elements, use the .parents() command.',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.cart').parents().should('have.length',6)
    })
})