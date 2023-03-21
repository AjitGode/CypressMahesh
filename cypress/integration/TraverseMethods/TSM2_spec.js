///<reference types="cypress"/>

describe('Cypress Traverse Methods',()=>{
    it('TSM-find()',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.cart').find('a').should('have.length',4)
        cy.get('.product-image').find('img').should('have.attr','alt')
    })

    it.only('TSM-next()',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search').next().should('have.class','cart')
        cy.get('.stepper-input').next().should('have.class','product-action')
        cy.get('.modal-wrapper').next().should('have.class','checkoutKartModal')
    })
})