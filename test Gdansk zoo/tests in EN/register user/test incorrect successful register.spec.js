import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  //accepr all cookies
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  //go to tickets page
  await page.getByLabel('See the lion at the Gdańsk Zoo').getByRole('link', { name: 'Tickets' }).click();
  //register user
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('textbox', { name: 'First name' }).click();
  await page.getByRole('textbox', { name: 'First name' }).fill('aaa');
  await page.getByRole('textbox', { name: 'Last name' }).click();
  await page.getByRole('textbox', { name: 'Last name' }).fill('bbb');
  await page.getByRole('textbox', { name: 'Phone' }).click();
  await page.getByRole('textbox', { name: 'Phone' }).fill('ccc');
  await page.getByRole('textbox', { name: 'Email address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email address', exact: true }).fill('a@b.c');
  await page.getByRole('textbox', { name: 'Repeat email address' }).click();
  await page.getByRole('textbox', { name: 'Repeat email address' }).fill('a@b.c');
  await page.getByRole('textbox', { name: 'Repeat password' }).click();
  await page.getByRole('textbox', { name: 'Repeat password' }).fill('dddddd');
  await page.getByText('Email address* Repeat email').click();
  await page.getByText('First name* Last name* Phone Email address* Repeat email address* Password*').click();
  //mark all fields with '*'
  await page.getByRole('checkbox', { name: 'I accept terms and conditions' }).check();
  await page.getByRole('checkbox', { name: 'I agree to the processing of personal data for order processing purposes*' }).check();
  await page.getByRole('checkbox', { name: 'I agree to the processing of personal data for marketing purposes' }).check();
  await page.getByRole('button', { name: 'Register' }).click();
//   await page.getByText('en:Zamknij').click();
});


