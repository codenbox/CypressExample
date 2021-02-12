/// <reference types="Cypress" />

describe('My test suite', function(){

  it('get text using text method option1', function(){

    cy.visit('http://codenboxautomationlab.com/practice/')

    cy.get('.page-title').invoke('text').then((text1) => {

      expect(text1).to.eq('Automation Practice')
      
  })

 })

 it('get text using text method option 2', function(){
  cy.visit('http://codenboxautomationlab.com/practice/')

  cy.get('.page-title').then(function(text2){

    cy.log(text2.text())
     

  })
 })


})

