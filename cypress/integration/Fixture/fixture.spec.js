///<reference types="cypress"/>

describe('Verify the fixture data',()=>{
    let info = [{
        name:"Ajit Gode",
        email:"abc@gmail.com",
        msg:"Hello Iam test engineer",
        Smsg: "Form submitted successfully."
    },
    {
        name:"Amol vetal",
        email:"abcd@gmail.com",
        msg:"Hello Iam salsforce engineer",
        Smsg: "Form submitted successfully."
    }
]

    it('Verify the fixture with normal object',()=>{
        cy.visit('https://codenboxautomationlab.com/contact/')
        cy.get('#nf-field-1').type(info.name)
        cy.get('#nf-field-2').type(info.email)
        cy.get('#nf-field-3').type(info.msg)
        cy.get('#nf-field-4').click()
        cy.wait(13000)
        cy.get('.nf-response-msg > p',{timeout:14000}).first().should('have.text',info.Smsg)
    })

    it.only('verify with mltiple data',()=>{
        info.forEach((el)=>{
            cy.visit('https://codenboxautomationlab.com/contact/')
            cy.get('#nf-field-1').type(el.name)
            cy.get('#nf-field-2').type(el.email)
            cy.get('#nf-field-3').type(el.msg)
            cy.get('#nf-field-4').click()
            cy.wait(13000)
            cy.get('.nf-response-msg > p',{timeout:14000}).first().should('have.text',el.Smsg)
        })
    })
})