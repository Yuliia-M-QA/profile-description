import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'ZOO Instagram', exact: true }).click();
  const page2 = await page2Promise;
  await page2.getByRole('button', { name: 'Allow all cookies' }).click();
  await page2.getByRole('button', { name: 'Close' }).click();
});
