//import { test, expect } from '@playwright/test';
import { expect } from '@playwright/test';

export class LoginPage{
      constructor(page){

        this.page = page;
        this.header="//h2[normalize-space()='Sign In']";
        this.username="#email1";
        this.password="//input[@placeholder='Enter Password']";
        this.loginButton="//button[text()='Sign in']";
      }

      async loginToApplication(){

        await this.page.fill(this.username, "admin@email.com");
        await this.page.fill(this.password, "admin@123");
        await this.page.click(this.loginButton);
      }
      
      async verifySignIn(){
        await expect(this.page.locator(this.header)).toBeVisible();
      }
      

}
 