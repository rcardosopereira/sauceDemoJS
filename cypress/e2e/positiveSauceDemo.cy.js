/*
Acceptance Criteria:
-Be able to test the authentication page with a positive and negative scenario.

-Automate the happy flow:
-Add two itens to the cart;
-Change the quantity of one item in the Your Cart page;
-Delete one of the item;
-Click the Checkout button;
-Fill in and validate the First Name , Last Name and Zip/Postal Code fields;
-Complete the order and make sure the order has been succeed;
-Make validations along the above steps to make sure the flow is successful;
*/

/// <reference types="Cypress" />

describe('Automated Happy Path', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com');
    });
  
    it('Positive scenario', () => {
      cy.fixture('data').then((data) => {
        cy.login(data.user, data.password);
        cy.addToCart('sauce-labs-bike-light');
        cy.addToCart('sauce-labs-backpack');
        cy.removeFromCart('sauce-labs-bike-light');
        cy.navigateToCheckout();
        cy.fillCheckoutForm('Rafael', 'Pereira', '9702-22');
        cy.completeCheckout();
        cy.verifyOrderCompletion();
        cy.returnToProducts();
      });
    });
  });