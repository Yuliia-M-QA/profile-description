import { test, expect } from '@playwright/test';

// test('Visit submenu pages are accessible', async ({ page }) => {
//   await page.goto('https://zoo.gdansk.pl/en/homepage/');
//   await page.getByRole('button', { name: 'Zgadzam się' }).click();
//   await page.getByRole('link', { name: 'en', exact: true }).click();

//   // Відкриваємо меню “Visit”
//   await page.locator('#menu-item-2753').getByRole('link', { name: 'Visit' }).click();
 
//   // Вибираємо "Children's Zoo"
//   await page.getByRole('link', { name: /Children.*Zoo/i }).click();

//   await expect(page.locator('h1')).toContainText (Children`s Zoo);
// });

test('Visit submenu pages are accessible', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');

  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  await page.getByRole('link', { name: 'en', exact: true }).click();
  await page.locator('#menu-item-2753').getByRole('link', { name: 'Visit' }).click();

  // Гнучке знаходження лінка
  await page.getByRole('link', { name: /Children.*Zoo/i }).click();

  // Очікуємо заголовок (можна теж гнучко):
  await expect(page.locator('h1')).toContainText(/Children.*Zoo/i);
});
