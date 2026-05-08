Cypress.Commands.add('getToten', (user,password) => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: {
            "email": "fulano@qa.com",
            "password": "teste"
        }
    }) .its('body.authorization').should('not.be.empty')
        .then((authorization) => {
            return authorization;                
        })
})