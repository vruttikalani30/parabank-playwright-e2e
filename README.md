# ParaBank Playwright E2E Automation Framework
Overview

This repository contains a production-style End-to-End (E2E) test automation framework developed using Playwright with TypeScript for the ParaBank online banking application.

The objective of this project is to demonstrate real-world automation engineering practices by validating complete business workflows across UI and API layers in a single, maintainable framework.

Application under test:
https://parabank.parasoft.com/parabank

Scope of Automation
✔ UI Automation

User registration with dynamically generated unique credentials
Secure login validation
Global navigation verification
Savings account creation
Account balance validation
Fund transfer between accounts
Bill payment flow
End-to-end assertions at each critical step

API Automation

Transaction search using ParaBank “Find Transactions” REST API
Validation of bill payment transactions by amount
JSON response validation for transaction details

Tech Stack

Playwright
TypeScript
Node.js
Page Object Model (POM)
REST API testing


Test Execution
Install dependencies
npm install

Run all tests
npx playwright test

Run only UI tests
npx playwright test tests/ui

Run only API tests
npx playwright test tests/api

View HTML report
npx playwright show-report
