/// <reference types="Cypress" />

describe('My First Test Suite', function (){
    
    it('Visit Codenbox automation site', function () {
      cy.visit('http://codenboxautomationlab.com/practice/')
      //should check correct url
      cy.url().should('include', 'codenbox')
      cy.wait(3000)
      
    })

    it('should pause the execution', function(){
        cy.pause()
    })


    it('should check the correct element on the page', function () {
        cy.get('.page-title').should('be.visible')
        
      })

    })