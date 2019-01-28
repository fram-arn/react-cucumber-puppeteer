import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:3000/login'
Given('username is {string} and password is {string}', (username, password) => {
  cy.visit(url)
  cy.get('input[name="email"]').type(username);
  cy.get('input[name="password"]').type(password);
})

When(`I submit to system`, () => {
  cy.get('button[type="submit"]').click();
})

When(`I get {string}`, (urlcontain) => {
  cy.url().should('include', urlcontain)
})
