import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  await page.getByRole('link', { name: 'pl' }).click();
    const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'ZOO Instagram', exact: true }).click();
  const page3 = await page3Promise;
  await page3.getByRole('button', { name: 'Allow all cookies' }).click();
  await page3.getByRole('button', { name: 'Close' }).click();
});