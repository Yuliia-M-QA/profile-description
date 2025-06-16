// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://zoo.gdansk.pl/en/homepage/');  await page.locator('#guide').getByRole('link', { name: 'Kontakt' }).click();
//   await page.getByText('Wybierz do kogo chcesz napisa').click();
//   await page.getByRole('textbox', { name: 'Imię i nazwisko lub nazwa:' }).click();
//   await page.getByRole('textbox', { name: 'Imię i nazwisko lub nazwa:' }).fill('qq qq');
//   await page.getByRole('textbox', { name: 'Twój adres e-mail: (wymagane)' }).click();
//   await page.getByRole('textbox', { name: 'Twój adres e-mail: (wymagane)' }).fill('q@q.q');
//   await page.getByRole('textbox', { name: 'Twój numer telefonu: (' }).click();
//   await page.getByRole('textbox', { name: 'Twój numer telefonu: (' }).fill('123456789');
//   await page.getByRole('textbox', { name: 'Treść wiadomości lub pytania:' }).click();
//   await page.getByRole('textbox', { name: 'Treść wiadomości lub pytania:' }).fill('qq');
//   await page.getByRole('button', { name: 'Wyślij wiadomość' }).click();
//   //pay attention thay user need ti find what exactly goin wron and were is a mistake...

//   await page.getByLabel('Formularz kontaktowy').getByText('Przynajmniej jedno pole jest').click();
// });

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  await page.getByRole('link', { name: 'pl' }).click();
  await page.locator('#guide').getByRole('link', { name: 'Kontakt' }).click();
  await page.getByLabel('Wybierz do kogo chcesz napisa').selectOption('Dział Edukacji');
  await page.getByRole('textbox', { name: 'Imię i nazwisko lub nazwa:' }).click();
  await page.getByRole('textbox', { name: 'Imię i nazwisko lub nazwa:' }).fill('qq');
  await page.getByRole('textbox', { name: 'Twój adres e-mail: (wymagane)' }).click();
  await page.getByRole('textbox', { name: 'Twój adres e-mail: (wymagane)' }).fill('q@test.co');
  await page.getByRole('textbox', { name: 'Twój numer telefonu: (' }).click();
  await page.getByRole('textbox', { name: 'Twój numer telefonu: (' }).fill('123456789');
  await page.getByRole('textbox', { name: 'Treść wiadomości lub pytania:' }).click();
  await page.getByRole('textbox', { name: 'Treść wiadomości lub pytania:' }).fill('qq');
  await page.getByRole('button', { name: 'Wyślij wiadomość' }).click();
});