# Boshko-Cypress
Technical assessment 


- Design considerations 

0. In both test suites ''beforeEach'' is defined since we need the same steps for all tests 
* The URL is same for every test scenario
* Desktop viewport and Mobile viewport with defined resolution
* Allow all cookies 
* Open the search field 

1. Testing the search feature with valid input
* I used this basic positive scenario to confirm that the search field functionality is working as expected and return correct results 
* As confirmation Is places URL Verification, so we can confirm that the page is correctly updated 

2. Testing the search feature with terms that are not present / Cirilyc alphabet
* In this test ''const searchTerm'' was used, we are using such a const to avoid repetitive writing when we want to use the same test with different searching terms. 
* This test case is important to confirm that the system do not show us broken layot or blank page 
* As a confirmation is required ''Nothing Found'' tittle 

3. Testing the search feature with empty input 
* In this test is used Import. This approach is useful when big project should be covered, and the same code block can be usede in a different test suites
* This case is important because of form validation, in this case the redirection is correct and the URL Verification is proper.
* As confirmation Is places URL Verification, so we can confirm that the page is correctly updated
* NOTE: In such a case improvement can be done. As a possible solution is a warning message on the FE when user try to search for spaces. It is also useful for the system since every query is using server resources 

- To the readMe file, also add some details about what you would automate if you could spend more time on the project.
1. Unification of the all selector on the website - creating of TEST-ID's
2. Every API response which is possible to be automated 
3. Registration and Login of user 
4. Payments
5. Promotions 
6. UX 
