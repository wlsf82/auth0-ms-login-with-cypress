const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://auth0.com',
    env: { hideXhr: true },
    experimentalModifyObstructiveThirdPartyCode: true,
  },
  fixturesFolder: false,
})
