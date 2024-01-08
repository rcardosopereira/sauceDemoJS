/// <reference types="Cypress" />

describe('Automated Negative Path', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com');
    });

  it.only('Mandatory Fields For Negative Path', () => {
    cy.fixture('data').then((data) => {
      cy.login(data.user, data.password);
      cy.addToCart('sauce-labs-bike-light');
      cy.navigateToCheckout();
      cy.get('[data-test="continue"]').click();
      cy.get('[data-test="error"]').should('be.visible').and('have.text', 'Error: First Name is required');
      cy.get('[data-test="firstName"]').type('Rafael')
      cy.get('[data-test="continue"]').click();
      cy.get('[data-test="error"]').should('be.visible').and('have.text', 'Error: Last Name is required');
      cy.get('[data-test="lastName"]').type('Pereira')
      cy.get('[data-test="continue"]').click();
      cy.get('[data-test="error"]').should('be.visible').and('have.text', 'Error: Postal Code is required');
    });
  });
});