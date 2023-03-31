import LoginPage from '../../Page_Object/login'


describe('Verify login with POM',()=>{
    it('TC01- valid Credential',()=>{
        LoginPage.elements.visit()
        LoginPage.elements.email('Admin')
        LoginPage.elements.password('admin123')
        LoginPage.elements.submit()
        cy.url().should('contain','dashboard/index')
        cy.get('[alt="client brand banner"]').should('be.visible')
        cy.get('.oxd-userdropdown-name').should('have.text','SHUBHAM S')
    })

    it.only('TC02- Invalid credentials',()=>{
        LoginPage.elements.visit()
        LoginPage.elements.email('Adminn')
        LoginPage.elements.password('admin1234')
        LoginPage.elements.submit()
        cy.get('.oxd-alert-content-icon').should('be.visible')
        cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')
    })
})