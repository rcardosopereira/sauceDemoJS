// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (username, password) => {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
  });
  
  Cypress.Commands.add('addToCart', (product) => {
    cy.get(`[data-test="add-to-cart-${product}"]`).click();
  });
  
  Cypress.Commands.add('removeFromCart', (product) => {
    cy.get(`[data-test="remove-${product}"]`).click();
  });
  
  Cypress.Commands.add('navigateToCheckout', () => {
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
  });
  
  Cypress.Commands.add('fillCheckoutForm', (firstName, lastName, postalCode) => {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
    cy.get('[data-test="continue"]').click();
  });
  
  Cypress.Commands.add('completeCheckout', () => {
    cy.get('[data-test="finish"]').click();
  });
  
  Cypress.Commands.add('verifyOrderCompletion', () => {
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
    cy.get('.complete-text').should(
      'include.text',
      'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
    );
  });
  
  Cypress.Commands.add('returnToProducts', () => {
    cy.get('[data-test="back-to-products"]').click();
  });