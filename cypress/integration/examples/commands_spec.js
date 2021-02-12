/// <reference types="Cypress" />

describe('My First Test Suite', function (){
    
    it('should login to the application using custom command', function () {
      cy.visit('https://codenboxautomationlab.com/wp-login.php')

      cy.login('NoNmae', '123456')
      cy.get('#login_error').should('contain', 'ERROR')

      
        
      })
      
  
      
  })