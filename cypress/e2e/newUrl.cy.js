describe('New Url', () => {
  
  it('Should display new shortened url to DOM when form is submitted with inputs', () => {
    cy.intercept('Get', 'http://localhost:3001/api/v1/urls', {fixture: 'url.json'})
    cy.visit('http://localhost:3000/')
    cy.get('input[name=title]').type('Stack overflow')
    cy.get('input[name=urlToShorten]').type('https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe')
    cy.get('button').click()
    cy.get('.url').last().contains('Stack overflow')
    cy.get('.url').last().contains('https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe')
  })
})
