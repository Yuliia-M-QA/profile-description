import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('link', { name: 'pl' }).click();
  await page.getByRole('button', { name: 'Zgadzam się' }).click();  await page.getByLabel('Strona główna ZOO').click();
  //click the differrent font size, pay attention it changed
  
  await page.getByRole('button', { name: 'Rozmiar napisów 100%' }).click();
  await page.getByRole('button', { name: 'Rozmiar napisów 125%' }).click();
  await page.getByRole('button', { name: 'Rozmiar napisów 150%' }).click();
});