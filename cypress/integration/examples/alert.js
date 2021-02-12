/// <reference types="Cypress" />

describe('My First Test Suite', function (){
    
    it('Visit Codenbox automation site', function () {
      cy.visit('http://codenboxautomationlab.com/practice/')
      //should check correct url
      cy.url().should('include', 'codenbox')
      cy.wait(3000)
      
    })

    it ('verify alert window', function(){
        cy.get('#alertbtn').click()
        cy.on('window:alert', (str) =>{
            expect(str).to.equal('Hello , share this practice page who love to learn automation')
        })

        
    })

    it ('verify confirm window', function(){
        cy.get('#confirmbtn').click()
        cy.on('window:confirm', (str) =>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

    })



})
