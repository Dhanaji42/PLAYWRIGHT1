const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const config = require('../utils/config');

test('Login Validation', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto(config.url);
    await loginPage.login( config.username,config.password );
    await expect( page.locator(".oxd-userdropdown-name")).toBeVisible();

});