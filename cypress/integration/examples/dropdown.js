/// <reference types="Cypress" />

describe('My First Test Suite', function (){
    
    it('Visit Codenbox automation site', function () {
      cy.visit('http://codenboxautomationlab.com/practice/')

      //static dropdown
      cy.get('#dropdown-class-example').select('Selenium').should('have.value', 'option1')

      //dynamic dropdown 
      cy.get('#autocomplete').type('can')
      cy.get('.ui-menu-item div').each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        if ($el.text() === 'Canada') {
          
          cy.wrap($el).click()

        }

    })





      

      

    })
  })