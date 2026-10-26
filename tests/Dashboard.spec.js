const { test, expect } = require('../fixtures/baseTest');
const config = require('../utils/config');

test('Dashboard Validation', async ({ page, loginPage }) => {

    await page.goto(config.url);

    await loginPage.login( config.username, config.password);

    await expect( page.locator("//h6[text()='Dashboard']")).toBeVisible();

    
});
