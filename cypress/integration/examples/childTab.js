/// <reference types="Cypress" />

describe('My First Test Suite', function (){
    
    it('Visit Codenbox automation site', function () {
      cy.visit('http://codenboxautomationlab.com/practice/')
      //should check correct url
      cy.url().should('include', 'codenbox')
      
    })


    it('Chaning Assert', function () {
       cy.get('#opentab').invoke('removeAttr', 'target').click()
    
        
      })

})