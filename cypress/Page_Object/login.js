class LoginPage {
    elements = {
        visit:()=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        },
        email:(value)=>{
            let email = cy.get('[name="username"]')
            email.type(value)
        },
        password:(value)=>{
            let pass= cy.get('[name="password"]')
            pass.type(value)
        },
        submit:()=>{
            let submit = cy.get('.orangehrm-login-button')
               submit.click()
        }
    }
}

module.exports = new LoginPage()