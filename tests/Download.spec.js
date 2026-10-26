const { test, expect } = require('@playwright/test');

test('File Download', async ({ page }) => {

    await page.goto( 'https://the-internet.herokuapp.com/download' );

    const downloadPromise =page.waitForEvent('download');

    await page.getByText('some-file.txt').click();

    const download =await downloadPromise;

    expect(download.suggestedFilename()).toContain('.txt');

});