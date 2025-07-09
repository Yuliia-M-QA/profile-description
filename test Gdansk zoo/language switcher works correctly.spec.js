import { test, expect } from '@playwright/test';

test('Language switcher changes content between PL and EN', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('button', { name: 'Zgadzam się' }).click();

  await expect(page.getByRole('link', { name: 'Visit' })).toBeVisible();

  // Перемикаємо на польську
  await page.getByRole('link', { name: 'pl' }).click();
  await expect(page.getByRole('link', { name: 'Wizyta w ZOO' })).toBeVisible();

  // І назад
  await page.getByRole('link', { name: 'en' }).click();
  await expect(page.getByRole('link', { name: 'Visit' })).toBeVisible();
});

