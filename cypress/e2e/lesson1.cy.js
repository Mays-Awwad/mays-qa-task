//<reference type="cypress" />

describe("lesson1", ()=> {

    it("visite the megento website", ()=> {

        cy.visit("/customer/account/login")
        cy.get("#email").type("cypressUser@gmail.com")
        cy.get("#pass").type("test@123")
        cy.get("#send2").click()
        
    })
})
