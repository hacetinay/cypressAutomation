///<reference types ='Cypress'/>
describe('handling web table', function(){
    it('find element in table', ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('[name="BookTable"]').contains('td','Learn Selenium').should('be.visible')
        cy.get('tbody tr:nth-child(2) td:nth-child(3)').contains('Selenium').should('be.visible')
    })
})