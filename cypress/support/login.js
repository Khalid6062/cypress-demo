export class loginPage{

    loginwith(username,password){
        cy.get('[placeholder="Username"]').clear().type(username);
        cy.get('[placeholder="Password"]').clear().type(password);
        cy.get('[data-test="login-button"]').click()
    }
}

export const onLoginPage = new loginPage