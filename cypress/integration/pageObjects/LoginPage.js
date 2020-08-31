/// <reference types = "Cypress"/>

class LoginPage {
    visit() {
        cy.visit("https://admin-demo.nopcommerce.com/login")
    }
    fillEmail(value) {
        const field = cy.get('[id="Email"]')
        field.clear()
        field.type(value)
        return this
    }
    fillpassword(value) {
        const field = cy.get('[id="Password"]')
        field.clear()
        field.type(value)
    }
     fillpassword3(value) {
        const field = cy.get('[id="Password"]')
        field.clear()
        field.type(value)
    }
    clickLogin() {
        cy.get('[type="submit"]').click()
    }
    clickRemeberMe() {
        cy.get("[type='checkbox']").click()
    }
} 

export default LoginPage
