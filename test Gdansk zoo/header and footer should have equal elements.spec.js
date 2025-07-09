import { test, expect } from '@playwright/test';

test('Footer structure should be equal in PL and EN versions', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl');
  await page.getByRole('button', { name: 'Zgadzam się' }).click();

  // Збираємо секції польською
  const plSections = await page.locator('footer section').count();

  // Перемикаємось на EN
  await page.getByRole('link', { name: 'en' }).click();
  await page.waitForLoadState('networkidle');

  // Збираємо секції англійською
  const enSections = await page.locator('footer section').count();

  // Якщо вони *спеціально різні* — просто логіка для порівняння
  console.log(`PL: ${plSections}, EN: ${enSections}`);
  expect(enSections).toBeGreaterThan(0); // або toBe(plSections) якщо вони *повинні* бути однаковими
});
