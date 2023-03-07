describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept('Get', 'http://localhost:3001/api/v1/urls', {fixture: 'url.json'})
    cy.visit('http://localhost:3000/')
  })

  it('Should display URL shortener', () => {
    cy.get('h1').contains('URL Shortener')
  })

  it('Should have a background image', () => {
    cy.get('.App').should('have.css', 'background-image')
  })

  it('Should display form to shorten a url', () => {
    cy.get('input').should('have.length', 2)
    cy.get('button').contains('Shorten Please!')
  })

  it('Should show all shortened urls', () => {
    cy.get('.url').contains('Awesome photo')
    cy.get('.url').contains('http://localhost:3001/useshorturl/1')
    cy.get('.url').contains('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
  })
})

// Iteration 3
// Write Cypress tests for the following user flows (don't forget to stub your network requests):

// When a user visits the page, they can view the page title and the existing shortened URLs
// When a user visits the page, they can view the Form with the proper inputs
// When a user fills out the form, the information is reflected in the input fields
// Iteration 4
// Write Cypress tests for the following user flows (don't forget to stub your network requests):

// When a user fills out and submits the form, the new shortened URL is rendered
