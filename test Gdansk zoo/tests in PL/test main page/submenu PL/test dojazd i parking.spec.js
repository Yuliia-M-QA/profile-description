import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    // open home page of Gdansk zoo
await page.goto('https://zoo.gdansk.pl/en/homepage/');
    // accept cookies
await page.getByRole('button', { name: 'Zgadzam się' }).click();
    // change language to Polish
await page.getByRole('link', { name: 'pl' }).click();
    // navigate to 'Wizyta w ZOO'
await page.locator('#menu-item-39').getByRole('link', { name: 'Wizyta w ZOO' }).click();
    // click on 'Dojazd i parking' link
await page.locator('#content').getByRole('link', { name: 'Dojazd i parking' }).click();
});