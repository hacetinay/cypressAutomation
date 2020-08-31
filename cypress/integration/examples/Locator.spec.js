/// <reference types="Cypress" />
describe('Locating Elements', function()
{
    it('Verify types of locators', function()
    {
        cy.visit("https://demo.nopcommerce.com/")
        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch")
        cy.get("#small-search-box-form > .button-1").click()
        cy.get("[class$='product-box-add-to-cart-button']").click()
        cy.get("#small-search-box-form > .button-1").should('be.visible').should('be.enabled').type('type something')
        cy.title().should('eq','fldsvl')
        cy.get("[dfs='sfds']").should('not.be.checked').click()
        cy.get("sdff").clear();


    })
}) 