import { test, expect } from '@playwright/test';

test('Visit submenu pages are accessible', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  await page.getByRole('link', { name: 'en', exact: true }).click();

  // Відкриваємо меню “Visit”
  await page.locator('#menu-item-2753').getByRole('link', { name: 'Visit' }).click();

  // Вибираємо "Discount cards"
  await page.getByRole('link', { name: 'Discount cards' }).click();
  await expect(page.locator('h1')).toContainText('Discount cards');

  // Можеш скопіювати цей шматок і повторити для інших пунктів:
  // "Food & drink", "Zoo Maps", "ZOO Train", etc.
});
