import { Page, expect, TestInfo } from '@playwright/test';
import { baseTableTestUrl } from '../config/config';
import { iterateTableItems } from '../core/webActions';

const selectors = {
    username: 'input[data-test="username"]',
    password: 'input[data-test="password"]',
    loginButton: 'input[data-test="login-button"]',
  };

/**
 * @param page - The Playwright `Page` object representing the webpage.
 * @param testInfo - The Playwright `TestInfo` object containing information about the test.
 * @returns {Promise<void>}
 */

  export const CoinPage = async (page: Page, testInfo: TestInfo) => {
    try {
      await page.goto(baseTableTestUrl);
      console.log('Page title:', await page.title());
      await iterateTableItems(page, testInfo);
      ;
      await page.waitForTimeout(1000);
    } catch (error) {
      await testInfo.attach('ErrorScreenshot', {
        body: await page.screenshot({ fullPage: true }),
        contentType: 'image/png',
      });
      throw error;
    }
  };