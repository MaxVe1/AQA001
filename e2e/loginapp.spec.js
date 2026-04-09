import { LoginPage } from '../pages/loginpage';
import { HomePage } from '../pages/homepage';
//https://www.youtube.com/watch?v=4aiu6pRE0YQ
import { test, expect } from '@playwright/test';
//const LoginPage= require("../pages/loginpage");

// test('Loginapp', async({page}) => {
   
// });

test('Loginapp1', async ({ page }) => {
    
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await expect(page).toHaveTitle("Learn Automation Courses"); 
     
 });

 test('Loginapp2', async ({ page }) => {
    
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    
    const loginPage = new LoginPage(page);
    await loginPage.loginToApplication();
    await expect(page).toHaveTitle("Learn Automation Courses"); 
     
 });
 
  test('Loginapp3', async ({ page }) => {
    
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    
    const loginPage = new LoginPage(page);
    await loginPage.loginToApplication();
    await expect(page).toHaveTitle("Learn Automation Courses"); 

    const homePage = new HomePage(page);
    await homePage.verifyManageOption();
    await homePage.logoutFromApplication();
    await loginPage.verifySignIn();
 });