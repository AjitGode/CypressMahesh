///<reference types="cypress"/>

describe('Verify the users API', () => {
    it('Retrive pase wise data', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then((res) => {
            // cy.log(res)
            expect(res.status).to.equal(200)
        })
    })
    it('Create User', () => {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users/390",
            body: {
                "name": "Ajit",
                "job": "tester"
            }
        }).then((res) => {
            expect(res.status).to.equal(201)
        })
    })

    it('Update user', () => {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: {
                "name": "Ajit Gode",
                "job": "Developer"
            }
        }).then((res) => {
            expect(res.status).to.equal(200)
        })
    })
    it.only('Delete user', () => {
        cy.request({
            method:"DELETE",
            url:"https://reqres.in/api/users/390"
        }).then((res)=>{
            expect(res.status).to.equal(204)
        })
    })
})