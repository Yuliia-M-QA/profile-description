import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('link', { name: 'pl' }).click();
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Bilety' }).click();
  const page1 = await page1Promise;
  await page1.getByText('Wejście w terminie:01.04.2025 -').click();
  await page1.getByRole('spinbutton', { name: 'Bilet normalny jednorazowy' }).click();
  await page1.getByRole('row', { name: 'Bilet normalny jednorazowy 45' }).getByRole('button').nth(1).click();
  await page1.getByRole('spinbutton', { name: 'Bilet normalny jednorazowy' }).click();
  await page1.getByRole('spinbutton', { name: 'Bilet normalny jednorazowy' }).fill('100000000000000000000');
  await page1.getByRole('button', { name: 'Dalej' }).click();
  await page1.getByText('Zamknij').click();
});