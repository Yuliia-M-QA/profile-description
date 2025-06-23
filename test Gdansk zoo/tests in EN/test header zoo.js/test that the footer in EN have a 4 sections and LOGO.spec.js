import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
//open Gdansk zoo
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
// accept all cookies
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
//change the language to EN
  await page.getByRole('link', { name: 'en', exact: true }).click();
  await page.locator('#bottom__logo').click();
});