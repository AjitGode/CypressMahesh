/// <reference types="cypress" />

describe('Verify The redbus calender', () => {
    cy.on("uncaught:exception", (err, runnable) => {
        return false;
    })
    it('Verify calender', () => {
        let date = new Date()
        date.setDate(date.getDate() + 300)
        let da = date.getDate();

        let month = date.getMonth();

        let fullMonth = date.toLocaleString('default', { month: 'short' })

        let year = date.getFullYear()
        cy.log(da)
        cy.visit('https://www.redbus.com/')
        cy.get('#onward_cal').click()

        function getMonthYear() {
            cy.get('.monthTitle').then((el) => {
                // cy.log(el.text())
                if (!el.text().includes(fullMonth)) {
                    cy.get('.next > button').click()
                    getMonthYear()
                }
            }).then(() => {
                cy.get('.monthTitle').then((el) => {
                    if (!el.text().includes(year)) {
                        cy.get('.next > button').click()
                        getMonthYear()
                    }
                })
            })
        }
        getMonthYear()

        function getDate(){
            cy.get('.we.day').contains(da).click()
        }
        getDate()
    })
})