describe("New Url", () => {
  it("Should display new shortened url to DOM when form is submitted with inputs", () => {
    cy.intercept(
      { method: "POST", url: "http://localhost:3001/api/v1/urls" },
      {
        statusCode: 200,
        body: {
          "id": 2,
          "long_url": "https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe",
          "short_url": "http://localhost:3001/useshorturl/2",
          "title": "Stack Overflow"
        }
      }
    );
    cy.visit("http://localhost:3000/");
    cy.get("input[name=title]").type("Stack Overflow");
    cy.get("input[name=urlToShorten]").type(
      "https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe"
      );
    cy.get("button").click();
    cy.get(".url").last().contains("Stack Overflow");
    cy.get(".url").last().contains("http://localhost:3001/useshorturl/2");
    cy.get(".url")
      .last()
      .contains(
        "https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe"
      );
  });
});
