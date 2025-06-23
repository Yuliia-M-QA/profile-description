test('Footer structure should be equal in PL and EN versions', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl');

  // Збираємо секції польською
  const plSections = await page.locator('footer section').count();

  // Перемикаємось на англійську
  await page.getByRole('link', { name: 'EN' }).click();
  await page.waitForTimeout(2000); // дати сторінці оновитися

  // Збираємо секції англійською
  const enSections = await page.locator('footer section').count();

  // Перевірка
  expect(plSections).toBe(enSections); // або toBeGreaterThan(), toBeLessThan() - якщо ти очікуєш різницю
});
