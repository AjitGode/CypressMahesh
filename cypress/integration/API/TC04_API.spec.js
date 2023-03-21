/// <reference types="cypress" />

describe('Verify comments button',()=>{
    beforeEach(()=>{
        cy.visit('https://example.cypress.io/commands/network-requests')
    })

    it('Verify GET Button',()=>{
        cy.get('.network-btn.btn.btn-primary').click()
        cy.get('.network-comment').should('be.visible').and('contain','laudantium enim')
    })
    it('Verify POST Comment',()=>{
        cy.get('.network-post.btn.btn-success').click()
        cy.get('.network-post-comment').should('have.text','POST successful!')
    })
    it.only('Verify PUT Comments',()=>{
        cy.get('.network-put.btn.btn-warning').click()
        cy.url().should('contain','network-requests')
    })
})