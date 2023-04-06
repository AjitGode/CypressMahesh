/// <reference types="cypress" />

describe('Verify The Alerts and promts', () => {
    it('TC01- Verify promt Alert with window', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el) => {
            cy.stub(el, 'prompt').returns('Ajit Gode')
        })
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('#result').should('contain', 'Ajit Gode')
    })
    it('TC02-Verify prompt alert with window', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el) => {
            cy.stub(el, 'prompt').returns("")
        })
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('#result').should('contain', 'You entered:')
    })

    it.only('TC03- Verify promt with window', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el) => {
            cy.stub(el, 'prompt').callsFake(() => null)
        })
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('#result').should('contain', 'You entered:')
        cy.get('#result').should('be.visible')
    })
})