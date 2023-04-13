/// <reference types="cypress" />

describe('Verify the APIs',()=>{
    it('Verify the GET Api',()=>{
        cy.request(({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        })).then((res)=>{
            cy.log(res)
            expect(res.status).to.equal(200)
            expect(res.body.data[0].first_name).to.equal("Michael")
            expect(res.body.per_page).to.eq(res.body.data.length)
        })
    })

    it.only('Verify the GET API for multile users',()=>{
        cy.request(({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        })).then((res)=>{
            res.body.data.forEach(element => {
                cy.log(element)
                expect(element).to.have.haveOwnProperty('id')
                expect(element).to.have.haveOwnProperty('email')
                expect(element).to.have.haveOwnProperty('first_name')
                expect(element).to.have.haveOwnProperty('last_name')
                expect(element).to.have.haveOwnProperty('avatar')
                expect(element).to.have.all.keys('id','email','first_name','last_name','avatar')
            });
        })
    })
})