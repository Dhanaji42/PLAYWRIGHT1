const { test, expect } = require('@playwright/test');
const path = require('path');

test('File Upload', async ({ page }) => {

    // Open Upload Page
    await page.goto('https://the-internet.herokuapp.com/upload');

    // Wait for page to load
    await page.waitForLoadState('networkidle');

    // File path
    const filePath = path.join(__dirname, '../testdata/sample.pdf');

    // Upload file
    await page.setInputFiles('#file-upload', filePath);

    // Click Upload button
    await page.click('#file-submit');

    // Validate success message
    await expect(page.locator('h3')).toHaveText('File Uploaded!');

    // Validate uploaded file name
    await expect(page.locator('#uploaded-files'))
        .toHaveText('sample.pdf');

});
