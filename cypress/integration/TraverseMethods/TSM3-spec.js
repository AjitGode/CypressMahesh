///<reference types="cypress"/>

describe('Verify Traverse Method', () => {
    it('TSC01-Closest()', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.checkoutKartModal').closest('div').should('have.class', 'modal-wrapper')
    })
    it('TSC02-filter()', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.cart > a').eq(2).filter('.cart-header-navlink').should('have.text', 'Flight Booking')
    })
    it.only('TSC03-parent()',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.action-block').parent().should('have.class','cart-preview')
        cy.get('#checkoutModalBtnTwo').parent().should('have.class','action-block')
    })
})