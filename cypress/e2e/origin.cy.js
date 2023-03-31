describe('cy.origin()', () => {
  beforeEach(() => cy.visit('/'))

  it('logs into Auth0 through Microsoft SSO', () => {
    cy.microsoftSingleSingOn()

    cy.location('pathname').should('equal', '/profile')
    cy.contains('h1', "Let's set you up for success").should('be.visible')
  })
})
