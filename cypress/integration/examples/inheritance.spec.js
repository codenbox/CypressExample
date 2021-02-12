class BasePage{
    static loadHomePage(){
        cy.visit('https://codenboxautomationlab.com/')

    }

    static wait(number){
        cy.wait(number)
    }
}

class HomePage extends BasePage{

    static scrollToBottom(){
        cy.contains('Contact Us').scrollIntoView()
    }

    static scrollToUp(){
        cy.get('.block-editor-rich-text__editable > span').scrollIntoView()
    }
}

describe('Inheritance between classes', function (){
    before(function(){
        //runs once before all the test cases excuted 
        //setup test data 
        //seed or reset the database
        HomePage.loadHomePage()
    })

    after(function(){
        //runs once after all the test cases excuted 
        //test clean up 
        //clean cookies 
        cy.clearCookies()
        cy.clearLocalStorage()

    })

    beforeEach(function(){
        //runs  before each it block in the describe 
        
    })

    afterEach(function(){
        //runs after each it block in the describe 
        
    })

    
    it('should scroll down and up in home page', function () {
     
     HomePage.scrollToBottom()
     HomePage.wait(3000)
     HomePage.scrollToUp()
     HomePage.wait(3000)


      
        
      })
      
  
      
  })