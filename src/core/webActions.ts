import { Page, ElementHandle } from '@playwright/test';

export async function navigateToUrl(page: Page, url: string): Promise<void> {
  await page.goto(url);
}

export async function waitForElement(
  page: Page,
  selector: string,
  timeout = 5000
): Promise<void> {
  await page.waitForSelector(selector, { timeout });
}

export async function clickElement(
  page: Page,
  selector: string,
  testInfo: any,
  screenshotName: string,
): Promise<void> {
  await page.click(selector);
  await testInfo.attach(screenshotName, {
    body: await page.screenshot(),
    contentType: 'image/png',
  })
}

export async function findTableItem(
  page: Page,
  selectors: string,
  testInfo: any,
  searchtext: string,
): Promise<void> {
  await page.locator('table[data-coin-table-target="table"]').locator('tbody tr').filter({

    has: page.locator('td a div div div'),
    hasText: searchtext


  }).click();
  
  await testInfo.attach('TableItemClickedScreenshot', {
    body: await page.screenshot(),
    contentType: 'image/png',
  })
}

export async function iterateTableItems(
  page: Page,
  // selectors: string,
  testInfo: any,
  // searchtext: string,
): Promise<void> {
  const len1=await page.locator('table[data-coin-table-target="table"]').locator('tbody tr').count();
  console.log(len1);
  const len2 = await page.locator('table[data-coin-table-target="table"]').locator('tbody tr td').count();
  console.log(len2);
  
  // for (let rCount = 0; rCount < len1; rCount++) {

    
      
      const textofEle = await page.locator('table[data-coin-table-target="table"]').locator('tbody tr').nth(3).locator('td').nth(3).locator('a').textContent();
      console.log(textofEle);
      // const text = await element.innerText();
      

    
  // }
  
  await testInfo.attach('TableItemClickedScreenshot', {
    body: await page.screenshot(),
    contentType: 'image/png',
  })
}

export async function fillInputField(
  page: Page,
  selector: string,
  text: string
): Promise<void> {
  await page.fill(selector, text);
}

export async function captureScreenshot(
  page: Page,
  path: string
): Promise<void> {
  await page.screenshot({ path });
}

export async function getElementText(
  page: Page,
  selector: string
): Promise<string | null> {
  const element = await page.$(selector);
  if (!element) {
    throw new Error(`Element with selector ${selector} not found.`);
  }
  return element.textContent();
}

export async function waitForNavigation(
  page: Page,
  url: string
): Promise<void> {
  await page.waitForURL(url);
}

export async function doesElementExist(
  page: Page,
  selector: string
): Promise<boolean> {
  const element = await page.$(selector);
  return !!element;
}

export async function clearInputField(
  page: Page,
  selector: string
): Promise<void> {
  await page.fill(selector, '');
}

export async function selectDropdownOptionByValue(
  page: Page,
  selector: string,
  value: string
): Promise<void> {
  await page.selectOption(selector, { value });
}

export async function hoverOverElement(
  page: Page,
  selector: string
): Promise<void> {
  await page.hover(selector);
}

export async function rightClickElement(
  page: Page,
  selector: string
): Promise<void> {
  await page.click(selector, { button: 'right' });
}

export async function getElementAttributeValue(
  page: Page,
  selector: string,
  attributeName: string
): Promise<string | null> {
  const element = await page.$(selector);
  if (!element) {
    throw new Error(`Element with selector ${selector} not found.`);
  }
  return element.getAttribute(attributeName);
}

export async function getElements(
  page: Page,
  selector: string
): Promise<ElementHandle[]> {
  return await page.locator(selector).elementHandles();
}

export async function switchToTabOrWindowByIndex(
  page: Page,
  index: number
): Promise<void> {
  const pages = await page.context().pages();
  if (index >= 0 && index < pages.length) {
    await pages[index].bringToFront();
  } else {
    throw new Error(`Tab or window with index ${index} not found.`);
  }
}

export async function clickAndWaitForNavigation(
  page: Page,
  selector: string
): Promise<void> {
  await Promise.all([
    page.click(selector),
    page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
  ]);
}

export async function scrollElementIntoView(
  page: Page,
  selector: string
): Promise<void> {
  const element = await page.$(selector);
  if (element) {
    await element.scrollIntoViewIfNeeded();
  }
}

export async function takeScreenshot(
  page: Page,
  fileName: string
): Promise<void> {
  await page.screenshot({ path: fileName });
}

export async function waitForElementToBeClickable(
  page: Page,
  selector: string
): Promise<ElementHandle | null> {
  return page.waitForSelector(selector, { state: 'visible' });
}

export async function typeText(
  page: Page,
  selector: string,
  text: string
): Promise<void> {
  await page.type(selector, text);
}

export async function pressEnter(page: Page, selector: string): Promise<void> {
  await page.press(selector, 'Enter');
}

export async function pressTab(page: Page, selector: string): Promise<void> {
  await page.press(selector, 'Tab');
}

export async function selectDropdownOption(
  page: Page,
  selector: string,
  option: string | { label?: string; value?: string; index?: number }
): Promise<void> {
  await page.selectOption(selector, option);
}
