import { test, expect } from '@playwright/test';

 
test('lavka-test', async ({ page }) => {
   await page.goto("https://ramonki.by/");
    
   await page.locator('body > div.v-modal.sale > div > span').click();
   await page.getByText('Каталог').click();
   await page.locator('a[href="/catalog/cat-odezda-1782510"]').click(); 
   
    
   await page.locator('#sidebar > div > div:nth-child(1) > div.filter__body > ul > li:nth-child(1)').click();
   await page.locator('.filter__text').getByText('Платья и сарафаны').click(); 

   await page.locator(`xpath=//span[contains(text(),"5805")]/../../../div`).click();    
   await page.locator('.options-selector__item').getByText("42").click(); 
   await page.locator('.button').getByText('Выбрать').click();

   await expect(page.locator('.success-add-modal__header')).toHaveText('Товар добавлен в корзину');
   await expect(page.locator('.success-add-modal__text--title')).toContainText("5805");  
   await expect(page.locator('//p[contains(text(),"артикул")]')).toContainText("5805"); 
      
   await expect(page.locator('//p[@class="success-add-modal__text"][contains(text(),"Размер")]')).toContainText("42"); 
     
 });
 