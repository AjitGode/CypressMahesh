///<reference types="cypress"/>

import data from "../../fixtures/contact"

describe('Verify the fixture file', () => {
    // let info;
    // before(() => {
    //     cy.fixture('contactUs').then((obj) => {
    //         info = obj;
    //     })
    // })
    // it('Verify the fixture data with contactus form',()=>{
    //     cy.fixture('contactUs').then((obj)=>{
    //         cy.log(obj)
    //         cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
    //         cy.get('input[name="first_name"]').type(obj.name)
    //         cy.get('input[name="last_name"]').type(obj.lastName)
    //         cy.get('input[name="email"]').type(obj.email)
    //         cy.get('textarea[name="message"]').type(obj.cmnt)
    //         cy.get('input[type="submit"]').click()
    //         cy.get('h1').should('be.visible').and('have.text',obj.smgg)
    //     })

    // })

    // it('Verify the fixture data with contactus form', () => {
    //     // cy.log(info)
    //     cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
    //     cy.get('input[name="first_name"]').type(info.name)
    //     cy.get('input[name="last_name"]').type(info.lastName)
    //     cy.get('input[name="email"]').type(info.email)
    //     cy.get('textarea[name="message"]').type(info.cmnt)
    //     cy.get('input[type="submit"]').click()
    //     cy.get('h1').should('be.visible').and('have.text', info.smgg)
    // })

     data.forEach((el)=>{
        it.only('Verify the import fixture data with contactus form',()=>{
            cy.log(el);
            cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
            cy.get('input[name="first_name"]').type(el.name)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.cmnt)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('be.visible').and('have.text', el.smsg)
        })
     })
})