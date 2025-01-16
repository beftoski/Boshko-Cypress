import SearchDetailsPage from "../../Features/SearchDetailsPage"

Cypress.on('uncaught:exception', (err) => { 
    if (err.message.includes('loadMoreSettings is not defined')) {  
    return false   
}
    return true
})  // website is throwing a non-critical error related to the loadMoreSettings function, so to supress the failure of our tests I use ''return false'

describe('Verify search feature functionality in desktop view', () => {

    beforeEach('Open the relevant page', () => {
        cy.viewport(1280, 800),
        cy.visit('https://www.unibet.co.uk/blog')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('.border-start > .search-link').click()
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
