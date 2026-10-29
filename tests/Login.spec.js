const { test, expect } = require('../fixtures/baseTest');
const config = require('../utils/config');

test('Login Validation', async ({ page, loginPage }) => {

    await page.goto(config.url);

    await loginPage.login(
        config.username,
        config.password
    );

    await expect(
        page.locator('.oxd-userdropdown-name')
    ).toBeVisible();

});