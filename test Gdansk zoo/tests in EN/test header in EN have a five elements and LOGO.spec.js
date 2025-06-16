import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // open maim page

  await page.goto('https://zoo.gdansk.pl/en/homepage/'); 
 // accept all cookies 
 
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
 // click 'Visit' and scroll down to see all are present

  await page.locator('#menu-item-2753').getByRole('link', { name: 'Visit' }).click();
   // click 'Animals' and scroll down to see all are present

  await page.getByRole('link', { name: 'Animals' }).click();
   // click 'About ZOO' and scroll down to see all are present

   await page.locator('#menu-item-2755').getByRole('link', { name: 'About ZOO' }).click();
    // click 'Contact' and scroll down to see all are present

  await page.locator('#menu-item-2754').getByRole('link', { name: 'Contact' }).click();
   // click 'LOGO'

  await page.getByLabel('Homepage').click();
   // click 'Tikets' must opens new tab

  const page1Promise = page.waitForEvent('popup');
  await page.locator('#top-menu-box').getByRole('link', { name: 'Tickets' }).click();
  const page1 = await page1Promise;
});