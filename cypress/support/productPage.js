
export class productPage{

    orderProduct(product){
        cy.get('.pricebar').contains('#add-to-cart-sauce-labs-'+product, 'Add to cart').click()
        //After clicking on Add to cart the item should be present in the cart icon element
        cy.get('.shopping_cart_link span').click()
        //Navigates to cart page where the products added to cart are present
        cy.url().should('include', 'cart.html')
        //clicks on the checkout button to further the order placement process
        cy.get('.cart_footer').find('#checkout').click()
        //types the firstName, lastName and postalCode 
        cy.get('[placeholder="First Name"]').type('firstName')
        cy.get('[placeholder="Last Name"]').type('lastName')
        cy.get('[placeholder="Zip/Postal Code"]').type('5000064')
        //clicks on continue button
        cy.get('.checkout_buttons input').click()
        //clicks on the finish button and navigates to "checkout-complete.html" page
        cy.get('.cart_footer #finish').click()
        cy.url().should('include', 'checkout-complete.html')
        cy.get('.header_secondary_container').should('contain.text', 'Checkout: Complete!')
        //As the order is placed cart icon element should not contain the product
        cy.get('.shopping_cart_link').should('not.have.class', 'shopping_cart_badge')
    }
    
    orderHighestProduct(t){
        cy.get('.product_sort_container').select('Price (high to low)')
        //clicks on the Add to cart button
        cy.get('.pricebar').contains('#add-to-cart-sauce-labs-fleece-jacket', 'Add to cart').click()
        //After clicking on Add to cart the item should be present in the cart icon element
        cy.get('.shopping_cart_link span').click()
        //Navigates to cart page where the products added to cart are present
        cy.url().should('include', 'cart.html')
        //clicks on the checkout button to further the order placement process
        cy.get('.cart_footer').find('#checkout').click()
        //types the firstName, lastName and postalCode 
        cy.get('[placeholder="First Name"]').type('firstName')
        cy.get('[placeholder="Last Name"]').type('lastName')
        cy.get('[placeholder="Zip/Postal Code"]').type('5000064')
        //clicks on continue button
        cy.get('.checkout_buttons input').click()
        //clicks on the finish button and navigates to "checkout-complete.html" page
        cy.get('.cart_footer #finish').click()
        cy.url().should('include', 'checkout-complete.html')
        cy.get('.header_secondary_container').should('contain.text', 'Checkout: Complete!')
        //As the order is placed cart icon element should not contain the product
        cy.get('.shopping_cart_link').should('not.have.class', 'shopping_cart_badge')
    }

    orderLowestProduct(){
        //selects the price (low to high) in the drop down menu
        cy.get('.product_sort_container').select('Price (low to high)')
        //clicks on the Add to cart button
        cy.get('.pricebar').contains('#add-to-cart-sauce-labs-onesie', 'Add to cart').click()
        //After clicking on Add to cart the item should be present in the cart icon element
        cy.get('.shopping_cart_link span').click()
        //Navigates to cart page where the products added to cart are present
        cy.url().should('include', 'cart.html')
        //clicks on the checkout button to further the order placement process
        cy.get('.cart_footer').find('#checkout').click()
        //types the firstName, lastName and postalCode 
        cy.get('[placeholder="First Name"]').type('firstName')
        cy.get('[placeholder="Last Name"]').type('lastName')
        cy.get('[placeholder="Zip/Postal Code"]').type('5000064')
        //clicks on continue button
        cy.get('.checkout_buttons input').click()
        //clicks on the finish button and navigates to "checkout-complete.html" page
        cy.get('.cart_footer #finish').click()
        cy.url().should('include', 'checkout-complete.html')
        cy.get('.header_secondary_container').should('contain.text', 'Checkout: Complete!')
        //As the order is placed cart icon element should not contain the product
        cy.get('.shopping_cart_link').should('not.have.class', 'shopping_cart_badge')
    }

    logout(){
        cy.get('#react-burger-menu-btn').click({ force: true })
        cy.get('#logout_sidebar_link').click({force: true})
    }

    verifySocialMediaIcon(Webapplication){
        cy.get('.social_'+Webapplication).find('a').as(Webapplication)
        cy.get('@'+Webapplication)
        cy.get('@'+Webapplication).invoke('removeAttr', 'target').click()
    }
}

export const onProductPage = new productPage