import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  await page.getByRole('link', { name: 'pl' }).click();
    const page5Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'ZOO Instagram Threads' }).click();
  const page5 = await page5Promise;
  await page5.getByRole('button', { name: 'Allow all cookies' }).click();
});