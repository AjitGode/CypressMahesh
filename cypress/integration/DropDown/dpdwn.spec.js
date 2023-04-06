describe('Verify the static and dynyamic dropdown', () => {
    cy.on("uncaught:exception",(err,runnable)=>{
        console.log(err)
        return false;
})
    it('Verify static dropdown box', () => {
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('#dropdown-class-example').select('option1')
        cy.get('#dropdown-class-example').select('option2')

    })

    it('Verify the static dropdown', () => {
        cy.visit('https://letcode.in/dropdowns')
        cy.get('#fruits').select(['3'])
    })

    it('Verify the dynyamic dropdown box', () => {
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('#autocomplete').type("india")
        cy.get('.ui-menu-item > div').each((el)=>{
            // cy.log(el.text())
            if(el.text()==="India"){
                cy.get(el,{ multiple: true }).click()
            }
        })
    })
    it('Verify multiple select dropdown box',()=>{
    cy.visit('https://demo.mobiscroll.com/jquery/select/multiple-select')
    cy.get('#multiple-select-select').invoke('removeAttr','style').select(['1','2','3','4','5'])
    })

    it.only('Verify multiple select dropdown box',()=>{
        cy.visit('https://chercher.tech/practice/practice-dropdowns-selenium-webdriver')
        cy.get('#second').select(['pizza','donut','burger'])
    })
})