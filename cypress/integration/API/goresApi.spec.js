/// <reference types="cypress" />

describe('Verify the gores APIs',()=>{
      let data;
    before(()=>{
        cy.fixture('createUser').then((user)=>{
             data=user;
        })
    })

    it('Verify the GET api',()=>{
        cy.request({
            method:"GET",
            url:"https://gorest.co.in/public/v2/users"
        }).then((res)=>{
            // cy.log(res)
            expect(res.status).to.equal(200)
        })
    })

    it('Verify the Create user Api',()=>{
        data.email = `ajit${Math.random()*6}@gmail.com`
        cy.request({
            method:'POST',
            url:"https://gorest.co.in/public/v2/users",
            body:data,
            headers:{
                Authorization:"Bearer abe6f14ed90582adb77fd14c315afcde567e5c9e46f1d5475d5127ba0262b345"
            }
        }).then((res)=>{
            expect(res.status).to.equal(201)
        })
    })

    it.only('Verify the Update user API',()=>{
        data.email = `ajit${Math.random()*6}@gmail.com`
        cy.request({
            method:"PUT",
            url:"https://gorest.co.in/public/v2/users/122",
            body:data,
            headers:{
                Authorization:"Bearer abe6f14ed90582adb77fd14c315afcde567e5c9e46f1d5475d5127ba0262b345"
            }
        }).then((res)=>{
            expect(res.status).to.equal(200)
        })
    })
})