import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  await page.getByRole('link', { name: 'pl' }).click();
  await page.getByRole('button', { name: 'Przełącz poziom kontrastu' }).click();
  await page.getByLabel('Strona główna ZOO').click();
});