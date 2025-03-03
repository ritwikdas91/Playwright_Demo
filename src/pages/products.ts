import { Page, TestInfo, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
// import datatest from "../../mocks/datatest.json";
import {articles2} from "../../mocks/datatest.json";
import { clickElement } from '../core/webActions';


const selectors = {
  addToCartBackpack: 'button[data-test="add-to-cart-sauce-labs-backpack"]',
  addToCartLight: 'button[data-test="add-to-cart-sauce-labs-bike-light"]',
  addToCartItem: 'button[data-test="add-to-cart-sauce-labs-',
  cartLink: 'a[data-test="shopping-cart-link"]',
  checkoutButton: 'button[data-test="checkout"]',
  firstName: 'input[data-test="firstName"]',
  lastName: 'input[data-test="lastName"]',
  postalCode: 'input[data-test="postalCode"]',
  continueButton: 'input[data-test="continue"]',
  finishButton: 'button[data-test="finish"]',
  backpackText: 'text=Sauce Labs Backpack',
  bikeLightText: 'text=Sauce Labs Bike Light',
};

/**
 * Add an item to the cart using Playwright's API.
 * @param page - The Playwright `Page` object representing the webpage.
 * @param testInfo - The Playwright `TestInfo` object containing information about the test.
 * @returns {Promise<void>}
 */
export const AddToCart = async (page: Page, testInfo: TestInfo, itemname:string) => {
  
  const { addToCartItem, cartLink } = selectors;
  // await articles2.itemstobuy.forEach((item:string) => {

    // console.log(itemname.toLowerCase().replace(/\s/g, '-'));
    // console.log(addToCartItem+itemname.toLowerCase().replace(/\s/g, '-')+'"]');
    
    // const updatedLocator= addToCartItem+itemname.toLowerCase().replace(/\s/g, '-')+'"]';

  // } );
  //  articles2.itemstobuy.forEach((item:string) => {

    
    
  //   const updatedLocator= addToCartItem+item.toLowerCase().replace(/\s/g, '-')+'"]';
  //   await clickElement(page, updatedLocator, testInfo, item+'AddedToCartScreenshot');
  //   // page.click(updatedLocator);

  // });

  for (const item of articles2.itemstobuy) {    
    console.log(addToCartItem+item.toLowerCase().replace(/\s/g, '-')+'"]'); 
    const updatedLocator= addToCartItem+item.toLowerCase().replace(/\s/g, '-')+'"]';
    await clickElement(page, updatedLocator, testInfo, item+'AddedToCartScreenshot');
  }
 

  // await page.click(updatedLocator);
  // try{
  //   clickElement(page, updatedLocator, testInfo, itemname+'AddedToCartScreenshot');  
  // }catch (error) {
  //   await testInfo.attach('ErrorScreenshot', {
  //     body: await page.screenshot({ fullPage: true }),
  //     contentType: 'image/png',
  //   });
  // }
  
 
  
};

/**
 * Checkout using Playwright's API.
 * @param page - The Playwright `Page` object representing the webpage.
 * @param testInfo - The Playwright `TestInfo` object containing information about the test.
 * @returns {Promise<void>}
 */
export const Checkout = async (page: Page, testInfo: TestInfo) => {
  const {
    checkoutButton,
    firstName,
    lastName,
    postalCode,
    continueButton,
    finishButton,
    cartLink,
  } = selectors;

  await page.click(cartLink);
  // const textLocator = page.locator('text=' + 'Sauce Labs ' + itemname);
  // await expect(textLocator).toBeVisible();
  await testInfo.attach('AddToCartScreenshot', {
      body: await page.screenshot(),
      contentType: 'image/png',
  });
  await page.click(checkoutButton);
  await page.fill(firstName, articles2.title);
  await page.fill(lastName, faker.person.lastName());
  await page.fill(postalCode, faker.location.zipCode());
  await page.click(continueButton);
  await testInfo.attach('CheckoutScreenshot', {
    body: await page.screenshot(),
    contentType: 'image/png',
  });
  await page.click(finishButton);
};
