import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  await page.getByRole('link', { name: 'pl' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'ZOO Facebook' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Allow all cookies' }).click();
});