
let file = "1677.png"
let file2 ="A.png"
let arr = ['1677.png','A.png','1677.png']

describe('Verify the uploadfile functionality',()=>{
    it('TSC01-upload file',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile(file)
        cy.get('#file-submit').click()
        cy.get('.example >h3').should('have.text','File Uploaded!')
        cy.get('#uploaded-files').should('contain',file)
    })

    it('Verify multiple file upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(arr)
        cy.get('#fileList>li').should('have.length',arr.length)
    })

    it('Verify upload file name',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:file,fileName:'Ajit.png'})
        cy.get('#file-submit').click()
        cy.get('.example >h3').should('have.text','File Uploaded!')
        cy.get('#uploaded-files').should('contain','Ajit.png')
    })

    it.only('Verify upload file name',()=>{
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/?submit-on-demand')
        cy.get('.is-selected').click()
        cy.get('#file').attachFile({filePath:file,fileName:'Ajit.png'})
        cy.get('.box__button',{force:true}).click()
    })
})