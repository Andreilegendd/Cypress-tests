describe('Eesti.ee homepage tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("should allow typing in the search bar", () => {
    cy.get(".search-input > input")
      .should("be.visible")
      .clear()
      .click()
      .type("Test")
      .should("have.value", "Test");
  });

  it("should return results when a valid query is entered", () => {
    cy.get(".search-input > input").type("eesti"); 
    cy.get(".flex-grow-1 > :nth-child(1)").should("exist");
  });
});
