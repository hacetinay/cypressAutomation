/// <reference types='Cypress'/>

describe ('pop-up window handling', function(){
    // it('aler',()=>{
    //     cy.visit("https://mail.rediff.com/cgi-bin/login-cgi")
    //     cy.get('').click()
    //     cy.on('window:alert',(str) =>{
    //         expect(str).to.equal('what message we are expecting')
    //     })
    // })
    it('confirm',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('[onclick="myFunction()"]').click()
        cy.on('window:confirm',(str) =>{
            expect(str).to.equal('Press a button!')
        })
    })
})
