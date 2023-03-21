///<reference types="cypress"/>

describe('Verify the mouse actions',()=>{
    // beforeEach(()=>{
    //     cy.visit('https://testpages.herokuapp.com/styled/drag-drop-javascript.html')
    // })

    it('TC01- scroll action',()=>{
        cy.get('[href="https://eviltester.com"]').scrollIntoView().click()
    })

     it('TC02- invoke action',()=>{
        cy.get('[href="https://eviltester.com"]').invoke('removeAttr','target').click()
     })

     it('TC03- Verify mousedown,mouseup & mouseMove',()=>{
        cy.get('#draggable1').trigger('mousedown',{which:1}).wait(3000)
        cy.get('#droppable1').trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable1 > p').should('have.text','Dropped!')
     })
     it('TC03- Verify mousedown,mouseup & mouseMove',()=>{
        cy.get('#draggable2').trigger('mousedown',{which:1}).wait(3000)
        cy.get('#droppable2').trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable2 > p').should('have.text','Dropped!')
     })

     it.only('TC04- Verify mouseover action',()=>{
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        cy.get('.dropbtn').first().trigger('mouseover')
        cy.get('.dropdown-content').first().invoke('show')
     })
    
})