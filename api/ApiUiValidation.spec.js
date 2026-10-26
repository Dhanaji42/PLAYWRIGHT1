const { test, expect } = require('@playwright/test');

test('API UI Validation', async ({ request, page }) => {

    // API - Create User
    const response = await request.post('https://reqres.in/api/users',
        {
            data: { name: 'Dhanaji',job: 'QA'
            }
        }
    );

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    // Get value from API
    const userName = responseBody.name;

    // UI - Login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator("input[name='username']").fill('Admin');
    await page.locator("input[name='password']").fill('admin123');
    await page.locator("button[type='submit']").click();

    // Pass API data to UI
    await page.locator("input[placeholder='Search']").fill(userName);

    // Single Combined Validation
    await expect(page.locator("input[placeholder='Search']")).toHaveValue(userName);

});