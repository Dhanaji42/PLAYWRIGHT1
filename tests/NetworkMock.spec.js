const { test, expect } = require('@playwright/test');

test('Network Mocking Example', async ({ page }) => {

    await page.route('**/api/users', async route => {

        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                name: 'Dhanaji',
                role: 'QA Engineer'
            })
        });

    });

    await page.goto('https://example.com');

});