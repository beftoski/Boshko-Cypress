import SearchDetailsPage from "../../Features/SearchDetailsPage"

Cypress.on('uncaught:exception', (err) => { 
    if (err.message.includes('loadMoreSettings is not defined')) {  //// without this block of code we expect 'loadMoreSettings is not defined' error to be thrown
    return false   
}
    return true
})

describe('Verify search feature functionality in mobile view', () => {

    beforeEach('Open the relevant page', () => {
        cy.viewport(375, 667)
        cy.visit('https://www.unibet.co.uk/blog')
        cy.get('.border-end > .search-link').click()
        cy.get('#onetrust-accept-btn-handler').click()
    })
 
    it('should succesfuly open search field, write and redirect', () => {
        cy.get('.border-bottom > .border-0').type('random{enter}')
        cy.url().should('include', '/search/random')      
    })

    it('should succesfuly open and display Nothing Found', () => {
        const searchTerm = 'Рандом'
        cy.get('.border-bottom > .border-0').type(`${searchTerm}{enter}`)
        cy.get('.entry-title').should('be.visible')
        cy.get('.entry-title').should('contain.text', 'Nothing Found')
    })

    it('should succesfuly open,add empty spaces and redirect', () => {
        const searchFeature = new SearchDetailsPage()
        
        searchFeature.searchForEmptyFields()
    })

})
