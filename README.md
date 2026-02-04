# ParaBank Playwright E2E Automation Framework
**Overview**

This repository contains a production-style End-to-End (E2E) test automation framework developed using Playwright with TypeScript for the ParaBank online banking application.

The objective of this project is to demonstrate real-world automation engineering practices by validating complete business workflows across UI and API layers in a single, maintainable framework.

Application under test:
https://parabank.parasoft.com/parabank

**Tech Stack**

Playwright

TypeScript

Node.js

Page Object Model (POM)

REST API testing

**Prerequisites**

Ensure the following are installed on your system:

Node.js (v16 or higher recommended)
https://nodejs.org/
npm (comes with Node.js)
A modern OS (Windows / macOS / Linux)

Verify installation:

node -v
npm -v

Clone the Repository
git clone <github-repo-url>
cd parabank-playwright-e2e

Install Project Dependencies

Install all required Node modules and Playwright packages:

npm install

Install Playwright Browsers

Playwright requires browser binaries (Chromium, Firefox, WebKit):

npx playwright install

**Test Execution**
Install dependencies
npm install

Run all tests
npx playwright test

Run only UI tests
npx playwright test tests/ui

Run only API tests
npx playwright test tests/api

Run Tests in Headed Mode
npx playwright test --headed

Run Tests with Debug Mode
npx playwright test --debug

View HTML report
npx playwright show-report
