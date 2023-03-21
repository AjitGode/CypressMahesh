///<reference types="cypress"/>

describe('Verify the cypress traverse method', () => {
    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.blinkingText').nextUntil('[href="https://rahulshettyacademy.com/dropdownsPractise/"]').should('have.length', 1)
        cy.get('.cart-info').nextUntil('.cart-preview').should('have.length', 1)
    })

    it('To get parents DOM element of elements, use the .parents() command.', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('[href="#/offers"]').parents().should('have.class', 'cart')
        cy.get('[href="#/offers"]').parents().should('have.class', 'container')
        cy.get('.cart').parents().should('have.length', 6)
    })
    it.only('To get parents DOM element of elements until other element, use the .parentsUntil() command.', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('[href="#/offers"]').parentsUntil('#root').should('have.length',4)
        cy.get('.action-block').first().parentsUntil('#root').should('have.length',5)
    })
})