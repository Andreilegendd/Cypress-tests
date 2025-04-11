describe('Navigating to the Eesti.ee services page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it("tervis ja retseptid subservices should be displayed", () => {
    cy.get(":nth-child(3) > .v-header__button > .material-icons").click();
    cy.get(
      ".sidenav-menuitem-container > :nth-child(4) > :nth-child(1) > .rounded > :nth-child(1) > .sidenav-nav-item > .btn > .flex-row > .w-100"
    ).click();
    cy.get(".sidenav-menuitem-container").should("exist");
  });

  it("should loads retseptid page correct", () => {
    cy.visit(
      "https://www.eesti.ee/eraisik/et/artikkel/tervis-ja-tervisekaitse/tervishoid-ja-arstiabi/retseptid"
    );
    cy.get(".shell-title").should("have.text", "Retseptid");
  });

  it("should open terviseportaalis link in a new window", () => {
    cy.visit(
      "https://www.eesti.ee/eraisik/et/artikkel/tervis-ja-tervisekaitse/tervishoid-ja-arstiabi/retseptid"
    );
    cy.get('a[href*="terviseportaal.ee"]')
    .should('have.attr', 'target', '_blank')
    .and('have.attr', 'href')
    .and('include', 'terviseportaal.ee')
  });
})
