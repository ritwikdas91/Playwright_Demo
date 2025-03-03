import { test } from '@playwright/test';
import { Severity, severity, epic, feature, story } from 'allure-js-commons';
import { CoinPage } from '../pages/tabletest';


test.describe('Test saucedemo', () => {
  // All tests in this describe group will get 2 retry attempts.
  test.describe.configure({ retries: 2, mode: 'serial' });
  test('Navigate to coinPage',{tag:'@Table-Test'}, async ({ page }, testInfo) => {
    await epic('Web interface');
    await feature('Essential features');
    await story('Authentication');
    await severity(Severity.CRITICAL);
    await CoinPage(page, testInfo);
  });
});
