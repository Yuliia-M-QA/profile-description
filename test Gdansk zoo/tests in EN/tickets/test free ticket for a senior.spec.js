import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#top-menu-box').getByRole('link', { name: 'Tickets' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('img', { name: 'ZOO visit' }).click();
  await page1.getByRole('row', { name: 'Free ticket for a senior Free' }).getByRole('button').nth(1).click();
  await page1.getByRole('button', { name: 'Continue' }).click();
  await page1.locator('#form_login_email').click();
  await page1.locator('#form_login_email').fill('a@b.c');
  await page1.getByRole('textbox', { name: 'Password' }).click();
  await page1.getByRole('textbox', { name: 'Password' }).fill('dddddd');
  await page1.getByRole('button', { name: 'Log in' }).click();
  await page1.locator('#notice-modal').click();
  await page1.getByRole('checkbox', { name: 'I declare that I have read' }).check();
  await page1.getByRole('button', { name: 'en:ODBIERAM' }).click();
});