/// <reference types="cypress" />

describe('Verify the All APIs',()=>{
    it('Verify the GET api',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then((res)=>{
            //cy.log(res)
            expect(res.body.data[1].first_name).to.equal("Lindsay")
        })
    })
    it('Verify the user per page',()=>{
        cy.request({
            method:'GET',
            url:"https://reqres.in/api/users?page=2"
        }).then((res)=>{
            expect(res.body.per_page).to.equal(res.body.data.length)
        })
    })
    it.only('Verify the keys in Object',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then((res)=>{
            cy.log(res.body.data.length)
            res.body.data.forEach(el => {
                expect(el).to.have.keys('id','email','first_name','last_name','avatar')

                for(let val of Object.values(res.body.data)){
                    expect(val).not.to.be.null
                }
            });

        })
    })
})