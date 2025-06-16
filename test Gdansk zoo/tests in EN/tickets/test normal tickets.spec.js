// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://zoo.gdansk.pl/en/homepage/');
//   await page.getByRole('button', { name: 'Zgadzam się' }).click();
//   await page.getByRole('textbox', { name: 'Email address' }).click();
//   await page.getByRole('textbox', { name: 'Email address' }).fill('a@b.c');
//   // await page.getByRole('textbox', { name: 'Email address' }).press('Tab');
//   await page.getByRole('textbox', { name: 'Password' }).fill('dddddd');
//   await page.getByRole('button', { name: 'Log in' }).click();
//   await page.getByText('en:Zamknij').click();
//   await page.getByText('Select type and number of tickets').click();
//   await page.getByText('ZOO visitDate of the visit01.').click();
//   await page.getByRole('row', { name: 'Free ticket for a disabled' }).getByRole('button').nth(1).click();
//   await page.getByRole('button', { name: 'Continue' }).click();
//   await page.getByRole('checkbox', { name: 'I declare that I have read' }).check();
//   await page.getByRole('button', { name: 'en:ODBIERAM' }).click();
// });

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#top-menu-box').getByRole('link', { name: 'Tickets' }).click();
  const page1 = await page1Promise;
  //precondition - user should be logged in
  //login to buy tickets
  await page1.getByRole('link', { name: 'Log in' }).click();
  await page1.getByRole('textbox', { name: 'Email address' }).click();
  await page1.getByRole('textbox', { name: 'Email address' }).fill('a@b.c');
  await page1.getByRole('textbox', { name: 'Email address' }).press('Tab');
  await page1.getByRole('textbox', { name: 'Password' }).fill('dddddd');
  await page1.getByRole('button', { name: 'Log in' }).click();
  //close inform pop up
  await page1.getByText('en:Zamknij').click();
  //select period of visit zoo
  await page1.getByText('Date of the visit01.04.2025 -').click();
  //choose the tickets (two normal)
  await page1.getByRole('row', { name: 'Normal ticket 45.00 zł 0 0.00' }).getByRole('button').nth(1).click();
  await page1.getByRole('row', { name: 'Normal ticket 45.00 zł 0 45.' }).getByRole('button').nth(1).click();
  //proceed by clicking 'continue'
  await page1.getByRole('button', { name: 'Continue' }).click();
  //select your declaration by clickin check-box (it mandatory), click buy and pay  
  await page1.getByRole('checkbox', { name: 'I declare that I have read' }).check();
  await page1.getByRole('button', { name: 'I buy and pay' }).click();
  //you are redirected to buying page
  await page1.getByRole('button', { name: 'Pay' }).click();
});