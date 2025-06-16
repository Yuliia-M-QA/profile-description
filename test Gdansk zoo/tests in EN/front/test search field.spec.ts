// import { test, expect } from '@playwright/test';

// test('search for the Monkey on zoo site', async ({ page }) => {
//   // Відкриваємо домашню сторінку
//   await page.goto('https://zoo.gdansk.pl/en/homepage/');

//   // Натискаємо кнопку пошуку (лупу)
//   await page.getByRole('button', { name: 'Search' }).click();

//   // Вводимо "17" у поле пошуку
//   const searchBox = page.getByRole('searchbox', { name: 'Enter a search term:' });
//   await expect(searchBox).toBeVisible();
//   await searchBox.fill('17');
//   await searchBox.press('Enter');

//   // Якщо є додаткова кнопка підтвердження пошуку — натискаємо (опційно)
//   const confirmButton = page.getByRole('search').getByRole('button');
//   if (await confirmButton.isVisible()) {
//     await confirmButton.click();
//   }

//   // Очікуємо, що результати зʼявляться (залежить від реальної поведінки сайту)
//   await page.waitForTimeout(2000); // краще замінити на чек реального результату

//   // (опційно) перевірка, що зʼявились якісь результати
//   const results = page.locator('.post-item'); // приклад селектора
//   await expect(results.first()).toBeVisible();
// });


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
      // 1. Відкрити сайт
  await page.goto('https://zoo.gdansk.pl/en/homepage/');

     // Погоджуємося з файлами cookie (якщо кнопка існує)
  const acceptCookies = page.getByRole('button', { name: 'Zgadzam się' });
  if (await acceptCookies.isVisible()) {
    await acceptCookies.click();
  }
  await page.locator('#menu-item-10167').getByRole('link', { name: 'Animals' }).click();

  await page.getByRole('button', { name: 'Search' }).click(); 

  // Вводимо "Monkey" у поле пошуку
  await page.getByRole('searchbox', { name: 'Enter a search term:' }).fill('monkey');
  await page.getByRole('searchbox', { name: 'Enter a search term:' }).press('Enter');
  await page.getByRole('link', { name: 'Patas Monkey DISTRIBUTION AND' }).click();
});