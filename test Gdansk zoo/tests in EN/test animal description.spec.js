import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  await page.locator('#menu-item-10167').getByRole('link', { name: 'Animals' }).click();
  await page.getByRole('link', { name: 'PhotoAfrican Penguin African' }).click();
});