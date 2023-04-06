

describe('Verify the date',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    it('verify the date',()=>{
        cy.visit('http://117.247.89.131/QMS1/BookingMaster.aspx')
        cy.get('#ctl00_aspxPageContent_txtBookingDate').type('03/04/2023')
    })
})