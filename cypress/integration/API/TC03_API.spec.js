/// <reference types="cypress" />


describe('Verify',()=>{
    it('GET Comment',()=>{
        cy.request({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).then(({body,status})=>{
            // cy.log(body)
            expect(status).to.equal(200)
        })
    })
    it('POST Comment',()=>{
        cy.request({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments",
            body:{
                "name":"AG",
                "email":"abc25@gmail.com",
                "body":"You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"

            }
        }).then(({body,status})=>{
            expect(status).to.equal(201)
        })
    })
    it.only('PUT Comments',()=>{
        cy.request({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1",
            body:{
                "name":"AG",
                "email":"abc@gmail.com",
                "body":"You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
            }
        }).then(({body,status})=>{
            expect(status).to.equal(200)
        })
    })
})