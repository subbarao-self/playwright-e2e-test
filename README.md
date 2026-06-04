# playwright-e2e-test

A Playwright end-to-end testing repository for web application flows using JavaScript and Page Object Model.

## Project Overview

- Test runner: `@playwright/test`
- Browser target: `chromium` (configured in `playwright.config.js`)
- Test files: `tests/*.spec.js`
- Page objects: `pageObjects/`
- Allure reporting support via `allure-playwright`

## Prerequisites

- Node.js installed
- npm available
- Allure CLI installed globally if you want to open the report:
  - `npm install -g allure-commandline --save-dev`

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Install Playwright browsers if needed:
   ```bash
   npx playwright install
   ```

## Run Tests

- Run the full Playwright suite:
  ```bash
  npm test
  ```

- Run tests tagged with `@rel`:
  ```bash
  npm run rel
  ```

## Allure Reporting

- Generate the report from `allure-results`:
  ```bash
  npm run allure:generate
  ```

- Open the generated report:
  ```bash
  npm run allure:open
  ```

## Repository Structure

- `tests/` - Playwright spec files
- `pageObjects/` - reusable page object classes
- `playwright.config.js` - Playwright configuration
- `allure-results/` - raw Allure test results
- `allure-report/` - generated HTML report

## Notes

- `playwright.config.js` currently runs tests in parallel and uses a Chromium configuration with screenshots, trace, and video on retries.
- A sample `config.env` file exists but is currently empty.
