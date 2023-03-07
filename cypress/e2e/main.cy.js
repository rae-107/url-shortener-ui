describe("Main Page", () => {
  beforeEach(() => {
    cy.intercept("Get", "http://localhost:3001/api/v1/urls", {
      fixture: "url.json",
    });
    cy.visit("http://localhost:3000/");
  });

  it("Should display URL shortener", () => {
    cy.get("h1").contains("URL Shortener");
  });

  it("Should have a background image", () => {
    cy.get(".App").should("have.css", "background-image");
  });

  it("Should display form to shorten a url", () => {
    cy.get("input").should("have.length", 2);
    cy.get("input[name=title]").should("be.visible");
    cy.get("input[name=urlToShorten]").should("be.visible");
    cy.get("button").contains("Shorten Please!");
  });

  it("Should show all shortened urls", () => {
    cy.get(".url").contains("Awesome photo");
    cy.get(".url").contains("http://localhost:3001/useshorturl/1");
    cy.get(".url").contains(
      "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    );
  });

  it("Should be able to type into form", () => {
    cy.get("input[name=title]").type("Stack overflow");
    cy.get("input[name=urlToShorten]").type(
      "https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe"
    );
    cy.get("input[name=title]").should("have.value", "Stack overflow");
    cy.get("input[name=urlToShorten]").should(
      "have.value",
      "https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe"
    );
  });
});
