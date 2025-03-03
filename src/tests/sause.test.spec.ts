import { test } from '@playwright/test';
import { Severity, severity, epic, feature, story } from 'allure-js-commons';

import { LoginPage } from '../pages/login';
import { AddToCart, Checkout } from '../pages/products';
import {articles, articles2} from "../../mocks/datatest.json";


test.describe('Test saucedemo', () => {
  // All tests in this describe group will get 2 retry attempts.
  test.describe.configure({ retries: 2, mode: 'serial' });
  test('Log in with username and password',{tag:'@UI-Test'}, async ({ page }, testInfo) => {
    await epic('Web interface');
    await feature('Essential features');
    await story('Authentication');
    await severity(Severity.CRITICAL);

    await LoginPage(page, testInfo);
    
    await AddToCart(page, testInfo,'item');
    
    await Checkout(page, testInfo);
  });
});
