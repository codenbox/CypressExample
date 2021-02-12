describe('My First Test Suite', function (){
    
    it('Visit Codenbox automation site', function () {
      cy.visit('http://codenboxautomationlab.com/practice/')
      cy.get('input[value="radio2"]').check().should('be.checked')
      //driver findElement()
      cy.get('#search-2 > #searchform > .search-input').type('automation').should('have.value', 'automation')

      

    })


    it('Get text from an element', function () {
      cy.visit('http://codenboxautomationlab.com/practice/')
      cy.get('.page-title').invoke('text').then((text1) => {

        cy.console(text1)


      })
      

      

    })
  })
  