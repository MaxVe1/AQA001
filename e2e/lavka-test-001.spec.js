import { test, expect } from '@playwright/test';

 
test('lavka-test', async ({ page }) => {
   await page.goto("https://ramonki.by/");
    
   await page.locator('body > div.v-modal.sale > div > span').click();
   await page.getByText('Каталог').click();

   await page.locator('a[href="/catalog/cat-odezda-1782510"]').click();   
     
 });
 