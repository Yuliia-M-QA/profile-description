import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //open main paage
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  //accept all cokies
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  //go to contact form
  await page.locator('#menu-item-2754').getByRole('link', { name: 'Contact' }).click();
  await page.getByText('Name:').click();
  //choose department
  await page.getByLabel('Choose who you want to send').selectOption('Education department');
  //fill in the form name
  await page.getByRole('textbox', { name: 'Name:' }).click();
  await page.getByRole('textbox', { name: 'Name:' }).fill('qq');
  //fill in the form email
  await page.getByRole('textbox', { name: 'Your email (required)' }).click();
  await page.getByRole('textbox', { name: 'Your email (required)' }).fill('q@test.co');
  //fill in the form phone number
  await page.getByRole('textbox', { name: 'Your phone number:' }).click();
  await page.getByRole('textbox', { name: 'Your phone number:' }).fill('222333444');
  //fill in the form message
  await page.getByRole('textbox', { name: 'Message:' }).click();
  await page.getByRole('textbox', { name: 'Message:' }).fill('hello');
  //click send
  await page.getByRole('button', { name: 'Send' }).click();
});