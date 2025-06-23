import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  //accept all cookies
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  //change language to PL
  await page.getByRole('link', { name: 'pl' }).click();
  //scroll dow and pay attention that all 4 sections has a subsections
  await page.locator('#bottom__logo').click();
});