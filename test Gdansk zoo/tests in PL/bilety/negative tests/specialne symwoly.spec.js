import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('link', { name: 'pl' }).click();
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Bilety' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('img', { name: 'Zwiedzanie ZOO' }).click();
//try to enter spec symbols like '```' or '\\\||' into quontity field

  await page1.getByRole('spinbutton', { name: 'Bilet Ulgowy jednorazowy' }).click();
});


//the user can't do it, enter some spec symbols, the filtering are works well