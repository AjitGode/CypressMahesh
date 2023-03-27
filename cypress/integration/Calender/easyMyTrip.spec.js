/// <reference types="cypress" />

describe('Verify easyMytrip calender', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        cy.log(err)
         return false
     })
    it('Verify calender', () => {
        cy.visit('https://tickets.paytm.com/bus/')
        cy.get('.fl-input._9KqY').first().click()
    })
})