import { LoginPage } from '../pages/loginpage';
//https://www.youtube.com/watch?v=4aiu6pRE0YQ
import { test, expect } from '@playwright/test';
//const LoginPage= require("../pages/loginpage");

// test('Loginapp', async({page}) => {
   
// });

test('Loginapp1', async ({ page }) => {
    //await page.goto(mainURL);

    await page.goto('https://freelance-learn-automation.vercel.app/login');
    
    //const loginPage = new LoginPage(page);
    //await loginPage.loginToApplication();
    await expect(page).toHaveTitle("Learn Automation Courses"); 
     
 });

 test('Loginapp2', async ({ page }) => {
    //await page.goto(mainURL);

    await page.goto('https://freelance-learn-automation.vercel.app/login');
    
    const loginPage = new LoginPage(page);
    await loginPage.loginToApplication();
    await expect(page).toHaveTitle("Learn Automation Courses"); 
     
 });
 