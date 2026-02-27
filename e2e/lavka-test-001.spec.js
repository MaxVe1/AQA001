import { test, expect } from '@playwright/test';

 
test('lavka-test', async ({ page }) => {
   await page.goto("https://ramonki.by/");
    
   await page.locator('body > div.v-modal.sale > div > span').click();
   await page.getByText('Каталог').click();

   await page.locator('a[href="/catalog/cat-odezda-1782510"]').click(); 
   
   //await page.getByRole('link', { name: 'Одежда' }).click();
   //await page.locator('a[href="/catalog/cat-platia-i-sarafany-38365"]').click(); 
   //await page.getByText('Платья и сарафаны').click();
   //await page.locator('//span[contains(text(),"Платья и сарафаны")]').click();
   //*[contains(text(),'ABC')]
   
   await page.locator('#sidebar > div > div:nth-child(1) > div.filter__body > ul > li:nth-child(1)').click();

   await page.locator('.filter__text').getByText('Платья и сарафаны').click(); 
     
 });
 