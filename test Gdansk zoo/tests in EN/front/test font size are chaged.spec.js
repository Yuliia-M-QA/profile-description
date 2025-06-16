import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // open the main page
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  // accept all cookies
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  // change the font size, scrolling dow to proove it
  await page.getByRole('button', { name: 'Text size 150%' }).click();
  await page.getByRole('button', { name: 'Text size 125%' }).click();
  await page.getByRole('button', { name: 'Text size 100%' }).click();
});