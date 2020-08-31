import LoginPage from '../pageObjects/LoginPage'

describe('TestSuit', function(){
    it('Valid Login Test', function(){
        const login = new LoginPage()
        login.visit()
        login.fillEmail('admin@yourstore.com')
        login.fillpassword('admin')
        login.clickRemeberMe()
        login.clickLogin()
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
    })
})
