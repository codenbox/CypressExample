/// <reference types="Cypress" />

describe('My First Test Suite', function (){
    
    it('Visit Codenbox automation site', function () {
      cy.visit('https://codenboxautomationlab.com/wp-login.php')
      cy.wait(3000)
      
    })

    it('should fill invalid username', function(){
        cy.get('#user_login').as('username')
        cy.get('@username').clear()
        cy.get('@username').type('NoName', {delay: 50})
    })

    it('should fill invalid password', function(){
        cy.get('#user_pass').as('password')
        cy.get('@password').clear()
        cy.get('@password').type('1234567', {delay: 50})
    })


    

})