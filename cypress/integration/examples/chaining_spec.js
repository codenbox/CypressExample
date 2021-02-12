/// <reference types="Cypress" />

describe('My First Test Suite', function (){
    
  it('Visit Codenbox automation site', function () {
    //cy.visit('http://codenboxautomationlab.com/practice/')
    cy.visit(Cypress.env('url')+"/practice/")

    
    //should check correct url
    cy.url().should('include', 'codenbox')
      
    })
    

    it('chaining Assertion Example', function () {

      cy.get('.page-title').should('be.visible').and('contain', 'Automation Practice')
       
       
    
        
      })

})