import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  await page.getByRole('link', { name: 'pl' }).click();
  await page.getByRole('button', { name: 'Szukaj' }).click();
  await page.getByRole('searchbox', { name: 'Wpisz szukaną frazę:' }).click();
  await page.getByRole('searchbox', { name: 'Wpisz szukaną frazę:' }).fill('małpa');
  await page.getByRole('searchbox', { name: 'Wpisz szukaną frazę:' }).press('Enter');
  // po press 'enter' nic się nie wyszukuje, tylko po kliku szukaj
  await page.getByRole('search', { name: 'Szukaj' }).getByRole('button').click();
});