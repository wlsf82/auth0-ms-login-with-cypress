import 'cypress-plugin-xhr-toggle'

import './commands'

Cypress.on('window:before:load', window => {
  const today = new Date()
  window.document.cookie = `OptanonAlertBoxClosed=${today.toISOString()}`;
})