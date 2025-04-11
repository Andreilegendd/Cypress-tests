describe("Search Bar Functionality", () => {
    beforeEach(() => {
      cy.visit("/"); 
    });
    it("should check that search bar returns data that matches the input", () => {
      cy.get(".search-input > input") .type("Eesti hümn");
      cy.get(".p-1 > .dynamic-icon > .material-icons").click();
      cy.get(".section-container").should("exist");
      cy.get(":nth-child(1) > .d-flex > div > .false").click();
      cy.get(".shell-title").should("have.text", "Eesti hümn");
    });

    it("should show an error message when search is empty", () => {
        cy.get(".search-input > input").clear();
        cy.get(".p-1 > .dynamic-icon > .material-icons").click();
    
        cy.get(".section-container").should("not.exist");
      });
  });