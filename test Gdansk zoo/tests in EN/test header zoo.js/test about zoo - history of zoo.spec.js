import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('button', { name: 'Zgadzam się' }).click();  await page.locator('#menu-item-2755').getByRole('link', { name: 'About ZOO' }).click();
  await page.locator('#menu-item-2755').getByRole('link', { name: 'About ZOO' }).click();
  await page.locator('#content').getByRole('link', { name: 'History of the ZOO' }).click();
});