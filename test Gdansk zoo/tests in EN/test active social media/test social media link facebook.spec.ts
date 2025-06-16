import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // open the main page zoo

  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  // accept all cookies, if appear

  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  // ckick on FB icon on header, must open in new tab
  
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'ZOO Facebook' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Allow all cookies' }).click();
});