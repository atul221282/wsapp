import { getGreeting } from '../support/app.po';

describe('sale-client', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to sale-client!');
  });
});
