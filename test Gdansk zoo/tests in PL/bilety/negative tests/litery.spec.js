import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('link', { name: 'pl' }).click();
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Bilety' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('img', { name: 'Zwiedzanie ZOO' }).click();
  await page1.getByRole('spinbutton', { name: 'Bilet normalny jednorazowy' }).click();
  await page1.getByRole('spinbutton', { name: 'Bilet normalny jednorazowy' }).fill('');
  await page1.getByRole('button', { name: 'Dalej' }).click();
  await page1.locator('#form_login_email').click();
  await page1.locator('#form_login_email').fill('a@b.c');
  await page1.locator('#form_login_email').press('Tab');
  await page1.getByRole('textbox', { name: 'Hasło' }).fill('dddddd');
  await page1.getByRole('button', { name: 'Zaloguj' }).click();
  await page1.getByText('Zamknij').click();
  await page1.getByRole('img', { name: 'Zwiedzanie ZOO' }).click();
  await page1.getByRole('spinbutton', { name: 'Bilet normalny jednorazowy' }).click();
  await page1.getByRole('spinbutton', { name: 'Bilet normalny jednorazowy' }).fill('');
  await page1.getByRole('button', { name: 'Dalej' }).click();
});