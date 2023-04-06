
/// <reference types="cypress" />

describe('Verify the calender functionality', () => {
    it('verify calender', () => {
        let date = new Date()
        date.setDate(date.getDate() + 300)
        let da = date.getDate();

        let month = date.getMonth();

        let fullMonth = date.toLocaleString('default', { month: 'long' })

        let year = date.getFullYear()
        // cy.log(da)

        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('.form-control').click()

        function getMonthYear() {
            cy.get('.datepicker-switch').first().then((el) => {
                if (!el.text().includes(fullMonth)) {
                    cy.get('.next').first().click()
                    getMonthYear()
                }

            }).then(() => {
                cy.get('.datepicker-switch').first().then((el) => {
                    if (!el.text().includes(year)) {
                        cy.get('.next').first().click()
                        getMonthYear()
                    }
                })
            })
        }
        getMonthYear()

        function getDate() {
            cy.get('.day').contains(da).click()
        }
        getDate()

    })
})