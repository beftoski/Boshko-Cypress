

export default class SearchDetailsPage {

searchForEmptyFields() {   
    cy.get('.border-bottom > .border-0').type('  {enter}')
    cy.url().should('include', '/search/++')
    }
}