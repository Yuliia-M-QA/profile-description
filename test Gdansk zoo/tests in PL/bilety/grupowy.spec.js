import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  await page.getByRole('link', { name: 'pl' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Bilety' }).click();
  const page1 = await page1Promise;
  await page1.getByText('Zwiedzanie ZOOWejście w').click();
  await page1.getByRole('row', { name: 'Bilet grupowy jednorazowy' }).getByRole('button').nth(1).click();
  await page1.getByRole('button', { name: 'Dalej' }).click();
  await page1.locator('#form_login_email').click();
  await page1.locator('#form_login_email').fill('a@b.c');
  await page1.getByRole('textbox', { name: 'Hasło' }).click();
  await page1.getByRole('textbox', { name: 'Hasło' }).fill('dddddd');
  await page1.getByRole('button', { name: 'Zaloguj' }).click();
  await page1.getByText('Zamknij').click();
  await page1.getByText('Oświadczam, że zapoznałem si').click();
  await page1.getByRole('button', { name: 'KUPUJĘ I PŁACĘ' }).click();
  await page1.getByRole('button', { name: 'Zapłać' }).click();
});