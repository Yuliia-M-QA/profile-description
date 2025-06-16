import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  await page.getByLabel('Homepage').click();
  await page.getByRole('link', { name: 'pl' }).click();
  await page.getByRole('link', { name: 'en', exact: true }).click();
  await page.getByRole('link', { name: 'pl' }).click();
});