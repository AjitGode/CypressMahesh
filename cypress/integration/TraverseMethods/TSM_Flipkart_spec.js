///<reference types="cypress"/>

describe('Traversal Methods', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    beforeEach(()=>{
        cy.visit('https://www.flipkart.com/')
    })
    it('TSM-01', () => {
        cy.get('._3704LK').type('i phone')
        cy.get('.L0Z3Pu').click()
        cy.wait(5000)
        cy.get('._10UF8M._3LsR0e').should('be.visible')
        cy.get('._4rR01T').first().should('have.text','APPLE iPhone 14 (Midnight, 128 GB)')
    })

    it('TSM-last()',()=>{
        cy.get('._3704LK').type('i phone')
        cy.get('.L0Z3Pu').click()
        cy.wait(5000)
        cy.get('._10UF8M._3LsR0e').should('be.visible')
        cy.get('._4rR01T').last().should('have.text','APPLE iPhone 14 Plus (Blue, 256 GB)')
    })
    it.only('TSM-eq()',()=>{
        cy.get('._3704LK').type('i phone')
        cy.get('.L0Z3Pu').click()
        cy.wait(5000)
        cy.get('._10UF8M._3LsR0e').should('be.visible')
        //cy.get('._4rR01T').eq(9).should('have.text','APPLE iPhone 14 ((PRODUCT)RED, 128 GB)')
        cy.get('._4rR01T').eq(0).should('have.text','APPLE iPhone 14 Plus (Purple, 256 GB)')
    })
})