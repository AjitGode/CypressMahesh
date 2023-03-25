
/// <reference types="cypress" />

describe('Verify the calender functionality',()=>{
    cy.on("uncaught:exception",(err,runnable)=>{
            return false;
    })
    it('Verify calender',()=>{
        let date = new Date()
        date.setDate(date.getDate()+300)
        let da = date.getDate()
        let month = date.getMonth()// jan =0 feb=1 march=2

        let fullMonth = date.toLocaleString('default',{month:"long"})
        let year = date.getFullYear()
        cy.log(da)

        cy.visit('https://demo.automationtesting.in/Datepicker.html')
        cy.get('#datepicker1').click()
        function selecctMonthYear(){
            cy.get('.ui-datepicker-title').then((el)=>{
               cy.log(el)
            })
        }
    })
})