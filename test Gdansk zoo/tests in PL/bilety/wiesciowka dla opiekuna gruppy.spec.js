import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  await page.getByRole('link', { name: 'pl' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Bilety' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('img', { name: 'Zwiedzanie ZOO' }).click();
  await page1.getByRole('row', { name: 'Wejściówka dla opiekuna grupy' }).getByRole('button').nth(1).click();
  await page1.getByRole('button', { name: 'Dalej' }).click();
  await page1.getByLabel('Zamknij').click();
});