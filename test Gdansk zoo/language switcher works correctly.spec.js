test('Language switcher changes content between PL and EN', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('button', { name: 'Zgadzam się' }).click();

  // Перевірка, що EN активна
  await expect(page.getByRole('link', { name: 'Visit' })).toBeVisible();

  // Перемикання на PL
  await page.getByRole('link', { name: 'pl' }).click();
  await expect(page.getByRole('link', { name: 'Wizyta w ZOO' })).toBeVisible();

  // Назад на EN
  await page.getByRole('link', { name: 'en' }).click();
  await expect(page.getByRole('link', { name: 'Visit' })).toBeVisible();
});
