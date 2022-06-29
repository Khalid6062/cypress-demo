const { onLoginPage } = require("../support/login");
const { onProductPage } = require("../support/productPage");

describe('ordering a product',()=>{
    beforeEach(()=>{
        cy.visitLoginPage()
    })
    it('ordering highest product',()=>{

        onLoginPage.loginwith('standard_user','secret_sauce')
        onProductPage.orderHighestProduct()
    })

    it('ordering lowest product',()=>{

        onLoginPage.loginwith('standard_user','secret_sauce')
        onProductPage.orderLowestProduct()
    })

    it.only('order any product',()=>{
        onLoginPage.loginwith('standard_user','secret_sauce')
        onProductPage.orderProduct('backpack')

    })
})