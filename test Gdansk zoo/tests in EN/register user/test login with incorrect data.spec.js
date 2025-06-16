// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://zoo.gdansk.pl/en/homepage/');
//   await page.getByRole('button', { name: 'Zgadzam się' }).click();
//   await page.getByRole('textbox', { name: 'Email address' }).click();
//   await page.getByRole('textbox', { name: 'Email address' }).fill('a@b.c');
//   await page.getByRole('textbox', { name: 'Email address' }).press('Tab');
//   await page.getByRole('textbox', { name: 'Password' }).fill('dddddd');
//   await page.getByRole('button', { name: 'Log in' }).click();
//   await page.getByText('en:Zamknij').click();
// });

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#top-menu-box').getByRole('link', { name: 'Tickets' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Log in' }).click();
  await page1.getByRole('textbox', { name: 'Email address' }).click();
  await page1.getByRole('textbox', { name: 'Email address' }).fill('a@b.c');
  await page1.getByRole('textbox', { name: 'Email address' }).press('Tab');
  await page1.getByRole('textbox', { name: 'Password' }).fill('dddddd');
  await page1.getByRole('button', { name: 'Log in' }).click();
  await page1.getByText('en:Zamknij').click();
});