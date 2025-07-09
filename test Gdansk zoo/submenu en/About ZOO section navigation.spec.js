import { test, expect } from '@playwright/test';

test('User can access “About ZOO” subsections', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('button', { name: 'Zgadzam się' }).click();

  // Краще оновити мову лише якщо зараз не en (щоб уникнути помилок)
  if (await page.getByRole('link', { name: 'en' }).isVisible()) {
    await page.getByRole('link', { name: 'en' }).click();
  }

  // Наводимо на About ZOO і клікаємо
  await page.locator('#menu-item-2755').hover();
  await page.getByRole('link', { name: 'History of the ZOO' }).click();

  // Очікуємо заголовок на сторінці, щоб бути впевненим
  await expect(page.locator('h1')).toContainText('History of the ZOO');
});

