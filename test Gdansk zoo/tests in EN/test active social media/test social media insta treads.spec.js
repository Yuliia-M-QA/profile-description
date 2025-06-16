import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'ZOO Instagram Threads' }).click();
  const page2 = await page2Promise;
  await page2.getByRole('button', { name: 'Allow all cookies' }).click();
});