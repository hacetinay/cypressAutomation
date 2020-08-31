///  <reference types ='Cypress'/>

describe('select dropdown menu',function(){
    it('select Turkish from dropdown',() =>{
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('Turkish').click()
        cy.get('.ui-corner-all').contains('English').click()
        // cy.url().contains('/Register')
    })
})