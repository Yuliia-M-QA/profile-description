import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#top-menu-box').getByRole('link', { name: 'Tickets' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('img', { name: 'ZOO visit' }).click();
  await page1.getByRole('row', { name: 'Free ticket for a group' }).getByRole('button').nth(1).click();
  await page1.getByRole('button', { name: 'Continue' }).click();
  await page1.getByText('en:Zamknij').click();
  await page1.getByRole('button', { name: 'Continue' }).click();
  await page1.goto('https://bilety.zoo.gda.pl/rezerwacja/nienumerowane.html?ter_id=4339&ter_idt=b92ff7fcf588ebcc1fda706326e23020');
  //pay attention to a pop-up information
  //await page1.getByText('en:Zamknij').click();
  await page1.getByRole('row', { name: 'Free ticket for a group' }).getByRole('button').nth(1).click();
  await page1.getByRole('row', { name: 'Free ticket for a group' }).getByRole('button').nth(1).click();
  await page1.getByRole('button', { name: 'Continue' }).click();
  await page1.getByText('en:Zamknij').click();
});