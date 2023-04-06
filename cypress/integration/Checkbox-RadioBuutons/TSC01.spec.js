///<reference types="cypress"/>

describe('Verify the checkbox in cypress',()=>{
    beforeEach(()=>{
        cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
    })
    it('TC01-checkbox using check method',()=>{
        cy.get('[value="red"]').check().should('be.checked')
        cy.get('[value="yellow"]').check().should('be.checked')
        cy.get('[value="blue"]').check().should('be.checked')
        cy.get('[value="orange"]').should('not.be.checked')
        cy.get('[value="green"]').should('not.be.checked')
        cy.get('[value="purple"]').should('not.be.checked')
    })

    it('Verify the functionality of checkbox using .click method',()=>{
        cy.get('[value="red"]').click().should('be.checked')
        cy.get('[value="yellow"]').click().should('be.checked')
        cy.get('[value="blue"]').click().should('be.checked')
        cy.get('[value="orange"]').should('not.be.checked')
        cy.get('[value="green"]').should('not.be.checked')
        cy.get('[value="purple"]').should('not.be.checked')
        // cy.get('[value="blue"]').click().should('be.checked')
        cy.get('[value="blue"]').check().should('be.checked')
    })
    it('verify the functionality of checkbox using uncheck method',()=>{
        cy.get('[value="red"]').click().should('be.checked')
        cy.get('[value="yellow"]').click().should('be.checked')
        cy.get('[value="blue"]').click().should('be.checked')
        cy.get('[value="orange"]').uncheck().should('not.be.checked')
        cy.get('[value="green"]').uncheck().should('not.be.checked')
        cy.get('[value="purple"]').uncheck().should('not.be.checked')
    })
    it('check multiple checkbox at once',()=>{
        cy.get('input[type="checkbox"]').check(['red','yellow','blue','orange','green','purple']).should('be.checked')
    })
    it('check multiple checkboxex at once using loop',()=>{
        cy.get('input[type="checkbox"]').each((arr)=>{
            cy.wrap(arr).check().should('be.checked')
        })
    })
    it('verify the radio button',()=>{
        cy.get('[type="radio"]').first().should('be.checked')
        cy.get('[type="radio"]').first().should('have.attr','checked')
        cy.get('[type="radio"]').eq(1).check().should('be.checked')
      
    })
    it.only('check multiple radio buttons',()=>{
        cy.get('[type="radio"]').each((arr)=>{
            cy.wrap(arr).check()
        })
    })
})