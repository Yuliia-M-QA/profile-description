import { test, expect } from '@playwright/test';

test('Visit submenu pages are accessible', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  await page.getByRole('link', { name: 'en', exact: true }).click();

  // Відкриваємо меню “Visit”
  await page.locator('#menu-item-2753').getByRole('link', { name: 'Visit' }).click();

  // Вибираємо "70th anniversary"
  await page.getByRole('link', { name: '70th anniversary' }).click();
  await expect(page.locator('h1')).toContainText('70th anniversary');

  // Можеш скопіювати цей шматок і повторити для інших пунктів:
  // "Discount cards", "Food & drink", "Zoo Maps", "ZOO Train", etc.
});
