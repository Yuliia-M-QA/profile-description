import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('link', { name: 'pl' }).click();
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  await page.getByRole('link', { name: 'en', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  //to buy ticket user should be logged in, use this credentials: a@b.c/dddddd
  await page.locator('#top-menu-box').getByRole('link', { name: 'Tickets' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('img', { name: 'ZOO visit' }).click();
  await page1.getByRole('row', { name: 'Reduced ticket Reduced' }).getByRole('button').nth(1).click();
  await page1.getByRole('button', { name: 'Continue' }).click();
  await page1.locator('#form_login_email').click();
  await page1.locator('#form_login_email').fill('a@b.c');
  await page1.getByRole('textbox', { name: 'Password' }).click();
  await page1.getByRole('textbox', { name: 'Password' }).fill('dddddd');
  await page1.getByRole('button', { name: 'Log in' }).click();
  await page1.getByText('en:Zamknij').click();
  await page1.getByRole('checkbox', { name: 'I declare that I have read' }).check();
  await page1.getByRole('button', { name: 'I buy and pay' }).click();
  await page1.getByRole('button', { name: 'Pay' }).click();
  await page1.goto('https://secure.payu.com/pay/?orderId=B1P5TS2P33250616GUEST000P01&token=eyJhbGciOiJIUzI1NiJ9.eyJvcmRlcklkIjoiQjFQNVRTMlAzMzI1MDYxNkdVRVNUMDAwUDAxIiwicG9zSWQiOiJPUmJ0ck1EaCIsImF1dGhvcml0aWVzIjpbIlJPTEVfQ0xJRU5UIl0sInBheWVyRW1haWwiOiJhQGIuYyIsImV4cCI6MTc1MDE0NDUwOCwiaXNzIjoiUEFZVSIsImF1ZCI6ImFwaS1nYXRld2F5Iiwic3ViIjoiUGF5VSBzdWJqZWN0IiwianRpIjoiY2E3N2M3OGYtZjA5YS00ZjhlLWJkYjMtMGUxMmI2MWRiNzc1In0.r3O2vvuksb6xlGjECZqAf66BbdB_mwAoP-LMkenwBMI#/payment');
});