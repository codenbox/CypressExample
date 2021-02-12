/// <reference types="Cypress" />



class PracticePage {

    static loadHomePage(){
        cy.visit(Cypress.env('url')+"/practice/")
        cy.url().should('include', 'codenbox')
    }

    static getTitle(){
        cy.get('.page-title').invoke('text').then((text1) =>{
            expect(text1).to.eq('Automation Practice')
        })
    }

    static getDropdownOption(){
        cy.get('#dropdown-class-example').select('Selenium').should('have.value', 'option1')
    }

    static searchCountry(){
        cy.get('#autocomplete').type('can')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            if ($el.text() === 'Canada') {
              cy.wrap($el).click()
    
            }

        })
    }

    static clickonRegForm(){
        cy.contains('Registration Form').click({force:true})
        cy.url().should('include', 'registration')
    }


}

export default PracticePage;