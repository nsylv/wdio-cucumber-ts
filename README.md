## TODO

To make this work I needed to upgrade chromedriver, see instructions here: https://github.com/SeleniumHQ/selenium/issues/7132

Download chromedriver and put it in the node_modules/chromedriver package

# WebdriverIO CucumberJS Typescript

## Usage

    npm install
    npm run test
    npm run test:debug
    npm run allure-report

## Boilerplate project with CucumberJS configured with typescript

-   Allure Reporter
-   Typescript PageObjects
-   Typescirpt Cucumber step decorators
-   Chai For assertions
-   Selenium Standalone with chrome and firefox capabilties in headless mode
-   Vscode launch configuration to debug tests

## Debugging Tests

-   `browser.debug()` statement in code and then: `npm run test:debug` this will enalbe debug repl in console window
-   Add breakpoints in vscode or debugger statement and run launch configuration in vscode.

### Dependencies

Java must be installed to run allure reports
