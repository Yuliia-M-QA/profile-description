import { test, expect } from '@playwright/test';

test('contrast and animals section test', async ({ page }) => {
  // Відкриваємо англомовну домашню сторінку
  await page.goto('https://zoo.gdansk.pl/en/homepage/');

  // Чекаємо, щоб кнопка контрасту була видимою, і натискаємо двічі
  const contrastButton = page.getByRole('button', { name: 'Toggle contrast level' });
  await expect(contrastButton).toBeVisible();
  await contrastButton.click();
  await contrastButton.click();

  // Повертаємось на домашню сторінку через логотип
  await page.getByLabel('Homepage').click();

  // Клікаємо на пункт меню "Animals"
  const animalsMenuItem = page.locator('#menu-item-10167').getByRole('link', { name: 'Animals' });
  await expect(animalsMenuItem).toBeVisible();
  await animalsMenuItem.click();

  // Клікаємо на конкретну тварину — Alpaca
  const alpacaLink = page.getByRole('link', { name: /Alpaca/i });
  await expect(alpacaLink).toBeVisible();
  await alpacaLink.click();
});
