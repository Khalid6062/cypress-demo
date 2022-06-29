const { onLoginPage } = require("../support/login");
const { onProductPage } = require("../support/productPage");

describe('verify the social media icons',()=>{

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

    it('verify the twitter icon',()=>{
        onLoginPage.loginwith('standard_user','secret_sauce')
        onProductPage.verifySocialMediaIcon('twitter')
    })

    it('verify the facebook icon',()=>{
        onLoginPage.loginwith('standard_user','secret_sauce')
        onProductPage.verifySocialMediaIcon('facebook')
    })

    it('verify the linkedin icon',()=>{
        onLoginPage.loginwith('standard_user','secret_sauce')
        onProductPage.verifySocialMediaIcon('linkedin')
    })

    afterEach(()=>{
        cy.go('back')
    })
})