/// <reference types="Cypress" />

class RegistrationPage{

    static getFirstName(firstName){
        cy.get('#nf-field-17').type(firstName, {delay: 30}).should('have.value', firstName )

    }

    static getLastName(lastName){
        cy.get('#nf-field-18').type(lastName, {delay: 30}).should('have.value', lastName )

    }

    static getEmail(email){
        cy.get('input[type="email"]').type(email, {delay: 30}).should('have.value', email )

    }

    static selectDropdown(){
        cy.get('#nf-field-22').select('Selenium Automation').should('have.value', 'selenium-automation')

    }


    static selectCheckbox(){
        cy.get('#nf-field-23-0').click({force:true}).should('have.value', 'facebook')

    }

    static submitForm(){
        cy.get('input[type="button"]').click().wait(4000)
        cy.get('.nf-response-msg').invoke('text').then((text1) =>{
            expect(text1).to.include('Thank you')

        })
    }


}

export default RegistrationPage;