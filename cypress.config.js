const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    video: true,
  },
});
// .\node_modules\.bin\cypress run --spec ".\cypress\e2e\integration\todos.cy.js"
