//import { test, 
  
import { expect } from '@playwright/test';

export class HomePage{

      constructor(page)
      {
        this.page = page;
        this.menu="//img[@alt='menu']";
        this.logoutoption="//button[normalize-space()='Sign out']";
        this.manageoption="//span[normalize-space()='Manage']";
        // this.loginButton="//button[text()='Sign in']";
      }
       async verifyManageOption()
       {
          await expect(this.page.locator(this.manageoption)).toBeVisible();
       }
       

       async logoutFromApplication()
       {
             await this.page.click(this.menu);
             await this.page.click(this.logoutoption);
      //   await this.page.click(this.loginButton);
       }

}
 