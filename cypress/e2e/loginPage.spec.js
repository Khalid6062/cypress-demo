const tests  = require('../fixtures/data.json')

const { onLoginPage } = require("../support/login");

describe('Data Driven test reading data from a JSON file',()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

    tests.forEach(test=>{
        it(test.name,()=>{

            onLoginPage.loginwith(test.username,test.password)
    
            if(test.name === ('standard user')){
                cy.get('.title').should('contain.text',test.expected)
            }else{
                cy.get('[data-test="error"]').should('contain.text',test.expected)
            }
        })
 
    })

})
