///<reference types="cypress"/>

describe('Verify the user API',()=>{
    it('Count the user per page',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.equal(200)
            expect(res.body.per_page).to.equal(res.body.data.length)
        })
    })
    it('verify keys in object',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then((res)=>{
            cy.log(res)
            //cy.log(res.body.data[0].email)
            res.body.data.forEach(el => {
                //cy.log(el)
                expect(el).to.have.keys('id','email','first_name','last_name','avatar')
            });
        })
    })

    it.only('Verify the keys when user create',()=>{
        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users",
            body:{
                "name":"Ajit Gode",
                "job":"Tester"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.body).to.have.keys('id','name','job','createdAt')

            for(let val of Object.values(res.body)){
                expect(val).not.to.be.null
            }
        })
    })
})