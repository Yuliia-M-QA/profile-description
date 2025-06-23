test('Tickets page opens in a new popup window', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('button', { name: 'Zgadzam się' }).click();

  const page1Promise = page.waitForEvent('popup');
  await page.locator('#top-menu-box').getByRole('link', { name: 'Tickets' }).click();
  const popup = await page1Promise;

  // Check language switcher exists on new page
  await expect(popup.getByRole('link', { name: 'pl' })).toBeVisible();
  await popup.getByRole('link', { name: 'pl' }).click();
  await popup.getByRole('link', { name: 'en' }).click();
});
