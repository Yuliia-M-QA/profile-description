import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    // Відкрити сайт
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
    // Погоджуємося з файлами cookie (якщо кнопка існує)
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
    // Натискаємо 'Visit zoo'
  await page.getByRole('link', { name: 'Visit ZOO' }).click();
    // Натискаємо 'Opening hours'
  await page.getByRole('link', { name: 'Opening hours' }).click();
    // Натискаємо 'Animals'
  await page.getByRole('link', { name: 'Animals' }).click();
    // Натискаємо 'Penguin African'
  await page.getByRole('link', { name: 'PhotoAfrican Penguin African' }).click();
  await page.locator('.c-gallery > a:nth-child(2)').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
    // Переходимо на головну сторінку сайту натискаючи лого
  await page.goto('https://zoo.gdansk.pl/en/animals/');
  await page.getByRole('link', { name: 'PhotoAfrican Savanna Elephant' }).click();
  await page.locator('#menu-item-2755').getByRole('link', { name: 'About ZOO' }).click();
  await page.locator('#content').getByRole('link', { name: 'History of the ZOO' }).click();
    // Переходимо на головну сторінку сайту натискаючи лого

  await page.goto('https://zoo.gdansk.pl/en/about-zoo/');
  await page.getByRole('link', { name: 'The Zoo in numbers' }).click();
  await page.getByRole('link', { name: 'Accessibility Statement' }).click();
  await page.locator('#menu-item-2754').getByRole('link', { name: 'Contact' }).click();
});