import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  await page.getByRole('link', { name: 'pl' }).click(); 
 const page4Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'ZOO TikTok' }).click();
  const page4 = await page4Promise;
  await page4.locator('div').filter({ hasText: 'Drag the slider to fit the' }).nth(1).click();
  await page4.getByRole('button', { name: 'Close' }).click();
  await page4.getByRole('button', { name: 'Allow all' }).click();
});