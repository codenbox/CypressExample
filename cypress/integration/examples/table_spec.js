/// <reference types="Cypress" />

describe('My First Test Suite', function (){
    
    it('Visit Codenbox automation site', function () {
      cy.visit('http://codenboxautomationlab.com/practice/')
      //should check correct url
      cy.url().should('include', 'codenbox')
      cy.wait(3000)
      
    })


//Find ‘Appium’ course name
    it('verify value from anywhere in the table', function () {
        cy.get('table >tbody >tr').contains('td', 'Appium ').should('be.visible')
        
      })

//Conditional logic: If the course name is ‘WebServices’ then price is ‘30’
      it('check conditional logic in the table', function () {

           cy.get('table >tbody >tr td:nth-child(2)').each(($el, index, $list) =>{
            var text=$el.text()
            if(text.includes('WebServices')){
                cy.get('table >tbody >tr td:nth-child(3)').eq(index).then(function(price){
                    var actualPrice=price.text()
                    expect(actualPrice.trim()).to.equal('30')

                })

            }

           })
        
    
        
      }) 





})