describe("Navigation", () => {
  it("should direct to contact detail page", () => {
    cy.visit("http://localhost:3000/");

    cy.get("button[type=submit]").click();

    cy.get("tbody tr:first").click();

    cy.get("button").contains("Contact detail page").click();

    cy.url().should("include", "/1");
  });
});
