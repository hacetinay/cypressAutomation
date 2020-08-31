///<reference types = 'Cypress'/>
describe('fixture practice', function(){
    before(function(){ 
        cy.fixture('example'),then(function(data){
            this.data=data
        })
    })

    it('DDT with fixture', function(){
        cy.visit('')
        cy.get('').type(this.data.email) //email
        cy.get('').type(this.data.password) //password
        cy.get('').click() //submit
        
        })



})

