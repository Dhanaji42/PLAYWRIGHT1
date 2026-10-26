const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('User Management', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto( "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await loginPage.login("Admin","admin123");

    await page.getByText('Admin').click();

     await expect(page).toHaveURL(/admin/);

});