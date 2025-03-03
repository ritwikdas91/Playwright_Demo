import { Page, expect, TestInfo } from '@playwright/test';
import { baseTableTestUrl, baseUrl } from '../config/config';
import { clickElement, findTableItem, iterateTableItems } from '../core/webActions';
import {articles} from "../../mocks/datatest.json"



const selectors = {
  username: 'input[data-test="username"]',
  password: 'input[data-test="password"]',
  loginButton: 'input[data-test="login-button"]',
};

/**
 * Login to the website using Playwright's API.
 * @param page - The Playwright `Page` object representing the webpage.
 * @param testInfo - The Playwright `TestInfo` object containing information about the test.
 * @returns {Promise<void>}
 */
export const LoginPage = async (page: Page, testInfo: TestInfo) => {
  try {
    // await page.goto(baseTableTestUrl);
          // console.log('Page title:', await page.title());
          // await iterateTableItems(page, testInfo);
          // await findTableItem(page,'', testInfo, 'XRP');
    await page.goto(baseUrl);
    console.log('Page title:', await page.title());
    await page.fill(selectors.username, articles.title);
    await page.fill(selectors.password, 'secret_sauce');
    await clickElement(page, selectors.loginButton, testInfo, 'LoginPageScreenshot');
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
