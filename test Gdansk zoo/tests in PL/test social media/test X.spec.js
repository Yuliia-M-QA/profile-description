import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  await page.getByRole('link', { name: 'pl' }).click();  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'ZOO X' }).click();
  const page2 = await page2Promise;
  await page2.getByRole('button', { name: 'Accept all cookies' }).click();
});