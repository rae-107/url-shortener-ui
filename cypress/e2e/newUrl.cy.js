describe("New Url", () => {
  it("Should display new shortened url to DOM when form is submitted with inputs", () => {
    cy.intercept(
      { method: "POST", url: "http://localhost:3001/api/v1/urls" },
      {
        statusCode: 200,
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: "Stack OverFlow",
          long_url:
            "https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe",
        })
      }
    );
    cy.intercept('GET', "http://localhost:3001/api/v1/urls", {fixture: 'newUrl.json'})
    cy.visit("http://localhost:3000/");
    cy.get("input[name=title]").type("Stack overflow");
    cy.get("input[name=urlToShorten]").type(
      "https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe"
      );
    cy.get("button").click();
    cy.get(".url").eq(1).contains("Stack Overflow");
    cy.get(".url")
      .last()
      .contains(
        "https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe"
      );
  });
});
