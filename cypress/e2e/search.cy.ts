describe("Search first name", () => {
  it("should display search result", () => {
    cy.visit("http://localhost:3000/");

    cy.get("input").type("David");

    cy.get("button[type=submit]").click();

    cy.get("table").contains("td", "David");
  });
});

describe("Search last name", () => {
  it("should display search result", () => {
    cy.visit("http://localhost:3000/");

    cy.get("input").type("Doe");

    cy.get("button[type=submit]").click();

    cy.get("table").contains("td", "doe");
  });
});
