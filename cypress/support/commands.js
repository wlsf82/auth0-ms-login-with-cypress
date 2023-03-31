Cypress.Commands.add('microsoftSingleSingOn', () => {
  cy.contains('header a', 'Login').click()
  cy.contains('button', 'Continue with Microsoft Account').click()
  cy.origin('https://login.live.com', () => {
    cy.get('input[type="email"]').type(Cypress.env('USERNAME'), { log: false })
    cy.get('input[type="submit"][value="Next"]').click()
    cy.get('input[type="password"]').type(Cypress.env('PASSWORD'), { log: false })
    cy.get('input[type="submit"][value="Sign in"]').click()
    cy.contains('.text-title', 'Stay signed in?').should('be.visible')
    cy.get('input[type="button"][value="No"]').click()
  })
})
