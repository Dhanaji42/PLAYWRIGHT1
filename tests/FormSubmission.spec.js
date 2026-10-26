const { test, expect } = require('@playwright/test');

test('Form Submission', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');

    // Name
    await page.locator('#firstName').fill('Dhanaji');
    await page.locator('#lastName').fill('Jadhav');

    // Email
    await page.locator('#userEmail').fill('dhanaji@test.com');

    // Gender
    await page.locator("label[for='gender-radio-1']").click();

    // Mobile
    await page.locator('#userNumber').fill('9876543210');

    // Date of Birth
    await page.locator('#dateOfBirthInput').click();
    await page.locator('.react-datepicker__month-select').selectOption('4');
    await page.locator('.react-datepicker__year-select').selectOption('1995');
    await page
        .locator('.react-datepicker__day--015:not(.react-datepicker__day--outside-month)')
        .click();

    // Subjects
    await page.locator('#subjectsInput').fill('Maths');
    await page.keyboard.press('Enter');

    // Hobbies
    await page.locator("label[for='hobbies-checkbox-1']").click();

    // Address
    await page.locator('#currentAddress').fill('Mumbai');

    // State
    await page.locator('#state').click();
    await page.getByText('NCR').click();

    // City
    await page.locator('#city').click();
    await page.getByText('Delhi').click();

    // Submit
    await page.locator('#submit').scrollIntoViewIfNeeded();
    await page.locator('#submit').click();

    // Validation
    await expect(
        page.locator('#example-modal-sizes-title-lg')
    ).toHaveText('Thanks for submitting the form');

});