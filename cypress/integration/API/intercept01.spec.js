/// <reference types="cypress" />

describe('verify the GET and POST method',()=>{
    it('Verify the GET comment',()=>{
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-btn.btn.btn-primary').click()
        cy.get('.network-comment').should('be.visible').and('contain','laudantium enim')
    })

    it('Verify the GET comment API',()=>{
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-btn.btn.btn-primary').click()
        cy.wait('@getComment').then(({request,response})=>{
            //cy.log(res)
            expect(response.statusCode).to.equal(200)
            expect(response.body).to.have.keys('postId','id','name','email','body')
            // cy.log(request)
            expect(request.method).to.equal("GET")
            expect(request.url).to.equal('https://jsonplaceholder.cypress.io/comments/1')
        })
        cy.get('.network-comment').should('be.visible').and('contain','laudantium enim')
    })

    it('Verify the POST comment APIs',()=>{
        cy.intercept({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments"
        }).as('postComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-post.btn.btn-success').click()
        cy.wait('@postComment').then(({request,response})=>{
            // cy.log(response.body.body)
            expect(response.statusCode).to.equal(201)
            expect(request.method).to.equal("POST")
        })
        cy.get('.network-post-comment').should('have.text','POST successful!')
    })
    it.only('Verify the PUT comment API',()=>{
        cy.intercept({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('putComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-put.btn.btn-warning').click()
        cy.wait('@putComment').then(({request,response})=>{
            expect(response.statusCode).to.equal(200)
            expect(request.method).to.equal("PUT")
        })
    })
})