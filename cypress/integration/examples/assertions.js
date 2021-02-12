/// <reference types="Cypress" />

describe('My First Test Suite', function (){
    
    it('Visit Codenbox automation site', function () {
      cy.visit('http://codenboxautomationlab.com/practice/')
      //should check correct url
      cy.url().should('include', 'codenbox')
      
    })



    it('should check the correct element on the page', function () {
        cy.get('.page-title').should('be.visible')
        
      })

      it('should assertion with length property example', function () {
        cy.get('.search-input').should('have.length', 2)
        
      })

      it('should assertion with text of an element', function () {
        cy.get('#openwindow').should('have.text', 'Open Window')
        
      })


      it('should check for option3 ', function () {
        cy.get('#checkBoxOption3').check().should('be.checked')
        
      })

      it('should select for Appium from dropdown ', function () {
        cy.get('#dropdown-class-example').select('Appium').should('have.value','option2')
        
      })

    

})