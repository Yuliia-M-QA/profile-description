import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // open the main page
  await page.goto('https://zoo.gdansk.pl/en/homepage/');

  // accept all cookies
  await page.getByRole('button', { name: 'Zgadzam się' }).click();

  // switch to PL 
  await page.getByRole('link', { name: 'pl' }).click();

  // 1sf element -wizyta w zoo
  await page.locator('#menu-item-39').getByRole('link', { name: 'Wizyta w ZOO' }).click();

  // 2nd elemenet -o zoo
  await page.locator('#menu-item-2898').getByRole('link', { name: 'O ZOO' }).click();

  //3rd element -Zwierzęta
  await page.getByRole('link', { name: 'Zwierzęta' }).click();

  //4th -Edukacja
  await page.locator('#menu-item-380').getByRole('link', { name: 'Edukacja' }).click();
  
  //5th Aktualności
  await page.locator('#menu-item-325').getByRole('link', { name: 'Aktualności' }).click();
  const page1Promise = page.waitForEvent('popup');

  //6th Fundacja
  await page.getByRole('link', { name: 'Fundacja', exact: true }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Zgadzam się' }).click();
  const page2Promise = page.waitForEvent('popup');

  //7th Bilety
  await page.getByRole('link', { name: 'Bilety' }).click();
  const page2 = await page2Promise;
  
  // LOGO
  await page.getByLabel('Strona główna ZOO').click();
});