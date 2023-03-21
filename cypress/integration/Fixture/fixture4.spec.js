///<reference types="cypress"/>

describe('verify the fixture data with this keyword', () => {
    let info;
    beforeEach(() => {
        cy.fixture('contactUs').then((user) => {
        //   info = user
        this.user=info
        })
    })
   
    it('this keyword', () => {
        cy.log(info)
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        // cy.get('input[name="first_name"]').type(this.user.name)
        // cy.get('input[name="last_name"]').type(this.user.lastName)
        // cy.get('input[name="email"]').type(this.user.email)
        // cy.get('textarea[name="message"]').type(this.user.cmnt)
        // cy.get('input[type="submit"]').click()
        // cy.get('h1').should('be.visible').and('have.text', this.user.smsg)
    })
})