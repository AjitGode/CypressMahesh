/// <reference types="cypress" />

describe('Verify the js Alerts', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    it('TC01- Basic Alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]').click()
        cy.on('window:alert',(text)=>{
            expect(text).to.equal('I am a JS Alert')
        })
    })

    it('TC02- Basic alert with stub',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el)=>{
            cy.stub(el,'alert').as('element')
        })
        cy.get('button[onclick="jsAlert()"]').click()
        cy.get('@element').should('have.been.calledOnceWith','I am a JS Alert')
    })

    it('TC03- Verify confirm Alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:confirm',(text)=>{
            expect(text).to.equal('I am a JS Confirm')
            return true
        })
        cy.get('#result').should('have.text','You clicked: Ok')
    })

    it('TC04- Verify confirm Alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:confirm',(text)=>{
            expect(text).to.equal('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('have.text','You clicked: Cancel')
    })
    it.only('TC05- Verify confirm Alert withh window',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el)=>{
            cy.stub(el,'confirm').as('element')
        })
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.get('@element').should('have.been.calledOnceWith','I am a JS Confirm')
    })

})
