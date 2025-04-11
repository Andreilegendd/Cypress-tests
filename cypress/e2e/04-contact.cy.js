describe('Checking the Eesti.ee contact information page', () => {
  beforeEach(() => {
    cy.visit('/eraisik/et/vajad-abi');
  });


  it("should have all required form fields on contact page", () => {
    cy.get('[controlname="fullName"]').should("exist");
    cy.get('[controlname="email"]').should("exist");
    cy.get('[fieldtype="textarea"]').should("exist");
  });

  it("should show error for invalid email format", () => {
    cy.get('[controlname="email"]')
      .type('invalid-email')

    cy.get(".invalid-control-scroll-trigger").click();
    

    cy.get(
      '[controlname="email"] > .d-flex > div[_ngcontent-rig-mfe-shell-c3766031634=""] > stateportal-invalid-input-error > .validation-error'
    ).should("exist");
  });
});
