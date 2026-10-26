const { test, expect } = require('@playwright/test');

test('Visual Testing', async ({ page }) => {

    await page.setViewportSize({
        width: 1280,
        height: 720
    });

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('homepage.png');

});