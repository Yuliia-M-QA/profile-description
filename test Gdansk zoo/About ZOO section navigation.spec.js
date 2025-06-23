test('User can access “About ZOO” subsections', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  await page.getByRole('link', { name: 'en' }).click();

  await page.locator('#menu-item-2755').getByRole('link', { name: 'About ZOO' }).click();
  await page.getByRole('link', { name: 'History of the ZOO' }).click();
  await expect(page).toHaveURL(/history-of-the-zoo/);

  await page.getByRole('link', { name: 'The Zoo in numbers' }).click();
  await expect(page).toHaveURL(/zoo-in-numbers/);
});
