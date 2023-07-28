const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/*.feature"
  },
  env: {
    baseUrl: 'https://www.eurostar.com/rw-en',
  },
  viewportWidth: 1280,
  viewportHeight: 720,
});
