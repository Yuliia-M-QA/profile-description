import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('link', { name: 'en', exact: true }).click();
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#top-menu-box').getByRole('link', { name: 'Tickets' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('img', { name: 'ZOO visit' }).click();
  await page1.getByRole('spinbutton', { name: 'Normal ticket' }).click();
  //enter a bir quantity of normal ticets

  await page1.getByRole('spinbutton', { name: 'Normal ticket' }).fill('9999999999');
  //enter continue button

  await page1.getByRole('button', { name: 'Continue' }).click();
  //pay attention on the screen? user should see the error message
  //close it
  await page1.getByText('en:Zamknij').click();
});