# 🎭 Playwright | AutomationTest | UI Framework


## Tech Details

- **Playwright**: A cross-browser automation library for Node.js. It enables you to write reliable end-to-end tests for web applications and websites. With Playwright, you can automate scenarios across multiple browsers (Chromium, Firefox, WebKit) and platforms (Windows, Linux, macOS).
- **Allure**: A flexible, lightweight multi-language test report tool that provides a concise representation of test results in a neat web report form. It allows everyone participating in the development process to extract maximum useful information from everyday execution of tests.

[Playwright Documentation](https://playwright.dev/)

## Prerequisites

- Node.js (>= 20.x)
- pnpm (>= 9.x)/npm
- Docker (for containerized execution)

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/ritwikdas91/Playwright_Demo.git
   cd automation-test-framework
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. If Allure Report not Working
   ```bash
   npm i allure-commandline
   ```

## Running Tests

To run the tests, use the following command:

```bash
npm i allure-commandline  
```


### Helper Functions

The following helper functions are available in `src/core/apiHelpers.ts`:

- `HttpGet(url: string, headers?: Record<string, string>)`: Perform an HTTP GET request.
- `HttpPost(url: string, data: any, headers?: Record<string, string>)`: Perform an HTTP POST request.
- `HttpPatch(url: string, data: any, headers?: Record<string, string>)`: Perform an HTTP PATCH request.

### Sample API Tests


