/// <reference types="Cypress" />

describe('My First Test Suite', function (){
    
    it('scroll the page up and down', function () {
      //cy.visit('https://codenboxautomationlab.com/')

      cy.visit(Cypress.env('url'))
      
      cy.wait(3000)
      cy.contains('Contact Us').scrollIntoView()
      //cy.wait(3000)
      cy.get('.block-editor-rich-text__editable > span').scrollIntoView()

      

    

      
        
      })
      
  
      
  })