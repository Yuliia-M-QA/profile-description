import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Відкриваємо сайт
  await page.goto('https://zoo.gdansk.pl/');

  // Перемикаємо на польську
  await page.getByRole('link', { name: 'pl' }).click();

  // Клікаємо на 4-й елемент галереї
  await page.locator('#maingallery > a:nth-child(4)').click();

  // Закриваємо вікно
  await page.getByRole('button', { name: 'Close' }).click();

  // Перемикаємо на англійську
  await page.getByRole('link', { name: 'en', exact: true }).click();

  // Переходимо в Contact (англійський розділ)
  await page.locator('#guide').getByRole('link', { name: 'Contact' }).click();

  // І знову на польську
  await page.getByRole('link', { name: 'pl' }).click();
});
