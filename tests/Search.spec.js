const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');

test('Search Module', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await loginPage.login(
        'Admin',
        'admin123'
    );

    // Dashboard Navigation Assertion
    await expect(
        page.locator("//h6[text()='Dashboard']")
    ).toBeVisible();

    // Search Module
    const searchBox = page.locator(
        "input[placeholder='Search']"
    );

    await searchBox.fill('Admin');

    // Search Assertion
    await expect(
        searchBox
    ).toHaveValue('Admin');

});
