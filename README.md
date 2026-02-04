# ParaBank Playwright E2E Automation Framework

This repository contains a production-style End-to-End (E2E) test automation framework developed using Playwright with TypeScript for the ParaBank online banking application.

The objective of this project is to demonstrate real-world automation engineering practices by validating complete business workflows across UI and API layers in a single, maintainable framework.

Application under test:
https://parabank.parasoft.com/parabank

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)
- REST API testing

Ensure the following are installed on your system:

- Node.js (v16 or higher recommended)
- https://nodejs.org/
- npm (comes with Node.js)
- A modern OS (Windows / macOS / Linux)

Verify installation:

- node -v
- npm -v

## Setup
- git clone https://github.com/vruttikalani30/parabank-playwright-e2e
- cd parabank-playwright-e2e
- npm install
- npx playwright install

## Test Execution
Run all tests
- npx playwright test

Run only UI tests
- npx playwright test tests/ui

Run only API tests
-  playwright test tests/api

Run Tests in Headed Mode
- npx playwright test --headed

Run Tests with Debug Mode
- npx playwright test --debug

View HTML report
- npx playwright show-report
