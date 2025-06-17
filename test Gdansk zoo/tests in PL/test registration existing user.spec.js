import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zoo.gdansk.pl/en/homepage/');
  //przelącz jezyk na PL
  await page.getByRole('link', { name: 'pl' }).click();
  await page.getByRole('button', { name: 'Zgadzam się' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Bilety' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('img', { name: 'Zwiedzanie ZOO' }).click();
  await page1.getByText('Zarejestruj się / zaloguj').click();
  await page1.getByRole('row', { name: 'Bilet normalny jednorazowy 45' }).getByRole('button').nth(1).click();
  await page1.getByRole('button', { name: 'Dalej' }).click();
  await page1.getByRole('textbox', { name: 'Imię' }).click();
  await page1.getByRole('textbox', { name: 'Imię' }).fill('qq');
  await page1.locator('#form_uzytkownik_email').click();
  //wpisz taki samy e-mail wczesnej zarejestrowany
  await page1.locator('#form_uzytkownik_email').fill('a@b.c');
  await page1.getByRole('textbox', { name: 'Nazwisko' }).click();
  await page1.getByRole('textbox', { name: 'Nazwisko' }).fill('qq');
  await page1.getByRole('textbox', { name: 'Powtórz adres e-mail' }).click();
  await page1.getByRole('textbox', { name: 'Powtórz adres e-mail' }).fill('a@b.c');
  await page1.getByRole('checkbox', { name: 'Chcę założyć konto w serwisie' }).check();
  await page1.getByRole('textbox', { name: 'Telefon' }).click();
  await page1.getByRole('textbox', { name: 'Telefon' }).fill('123456789');
  await page1.locator('#form_uzytkownik_haslo').click();
  await page1.locator('#form_uzytkownik_haslo').fill('gggggg');
  await page1.getByRole('textbox', { name: 'Powtórz hasło' }).click();
  await page1.getByRole('textbox', { name: 'Powtórz hasło' }).fill('gggggg');
  await page1.getByRole('checkbox', { name: 'Akceptuję regulamin' }).check();
  await page1.getByRole('checkbox', { name: 'Wyrażam zgodę na przetwarzanie danych osobowych w celach realizacji zamówień*' }).check();
  await page1.getByRole('checkbox', { name: 'Wyrażam zgodę na przetwarzanie danych osobowych w celach marketingowych' }).check();
  await page1.getByRole('button', { name: 'Dalej' }).click();
  //pay attention to popup msg
  await page1.getByText('Zamknij').click();
});