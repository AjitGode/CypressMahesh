describe('Verify the elements using traverse method', () => {

    //children 
    it('To get children of DOM elements, use the .children() command.', () => {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().should('have.length', 5)
    })

    it('To get children of DOM elements, use the .children() command.', () => {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.menu').children().should('have.length', 3)
    })

    //eq 

    it('To get a DOM element at a specific index, use the .eq() command.', () => {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().eq(1).should('have.text', 'Tea')
    })

    //first()

    it('To get the first DOM element within elements, use the .first() command.', () => {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-job-list').children().first().should('have.text', 'Types of Jobs')
    })

    it("To get the first DOM element within elements, use the .first() command.", () => {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().first().should('have.text', 'Danger')
    })

    // last()
    it('To get the last DOM element within elements, use the .last() command.', () => {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().last().should('have.text', 'Alert')
    })

    // prev()
    it.only('To get the previous sibling DOM element within elements, use the .prev() command.', () => {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#tea').prev().should('have.id','coffee')
    })

})