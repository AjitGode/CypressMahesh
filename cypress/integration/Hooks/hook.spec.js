
///<reference types="cypress"/>

describe('Cypress Hooks',()=>{
    before(()=>{
        cy.log('I am from Before Block')
    })
    beforeEach(()=>{
        cy.log('I am from beforeEach block')
    })
    after(()=>{
        cy.log('I am from after Block')
    })
    afterEach(()=>{
        cy.log('I am from afterEach block')
    })
    it('TSC-01',()=>{
       cy.log("Test Case 01")
    })
    it('TSC-02',()=>{
        cy.log("Test Case 02")
    })
})