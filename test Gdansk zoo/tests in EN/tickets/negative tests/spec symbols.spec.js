import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('link', { name: 'en', exact: true }).click();
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#top-menu-box').getByRole('link', { name: 'Tickets' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('img', { name: 'ZOO visit' }).click();
  //try to enter spec symbols like '```' or '\\\||' into quontity field
  await page1.getByRole('spinbutton', { name: 'Normal ticket' }).click();
  await page1.getByRole('spinbutton', { name: 'Reduced ticket' }).click();
  await page1.getByRole('spinbutton', { name: 'Normal ticket' }).click();
});
//the user can't do it, the filtering are works well