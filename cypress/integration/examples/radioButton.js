/// <reference types="Cypress"/>

describe('click checkbox', function(){
    it('click cricket checkbox', () =>{
        cy.visit("http://demo.automationtesting.in/Register.html")
        cy.get('[value="Cricket"]').check().should('be.checked').and('have.value','Cricket')
        cy.get('[value="Cricket"]').uncheck().should('not.be.checked').and('have.value', 'Cricket')
    })
    it('select the Java fron dropdown', ()=>{
        cy.get('[id="Skills"]').select('Java').should('have.value','Java')
        
    })
})


