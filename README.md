# Eesti.ee Cypress Tests

This repository contains Cypress tests for testing the eesti.ee website functionality.

## Test Structure

The tests are organized into the following categories:

1. **Homepage Tests** (`01-homepage.cy.js`):
   - Checking if the page loads correctly
   - Verifying search bar visibility and functionality

2. **Search Functionality Tests** (`02-search.cy.js`):
   - Testing search with "Eesti hümn" query
   - Verifying search results
   - Testing empty search and error messages

3. **Services Navigation Tests** (`03-services.cy.js`):
   - Navigating to "Eraisiku" -> "Tervis ja retseptid"
   - Checking if "Retseptid" page loads correctly
   - Testing health portal links

4. **Contact Page Tests** (`04-contact.cy.js`):
   - Navigating to the "Contact" page
   - Checking all required form fields
   - Testing form validation with incorrect email format

## Running Tests

You can run tests in the Cypress UI or via the command line:

```bash
# Run all tests headlessly
npx cypress run

# Run a specific test file
npx cypress run --spec "cypress/e2e/01-homepage.cy.js"
```

## Notes

- The selectors used in these tests may need adjustment based on the actual structure of the eesti.ee website.
- Some tests might fail if the website structure changes or if there are temporary issues with the site.
