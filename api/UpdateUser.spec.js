const { test, expect } = require('@playwright/test');

test('Update User', async ({ request }) => {

    const response = await request.put(
        'https://reqres.in/api/users/2',
        {
            data: {
                name: 'UpdatedUser'
            }
        }
    );

    // Validate Status Code
    expect(response.status()).toBe(200);

    // Convert Response
    const responseBody = await response.json();

    console.log(responseBody);

    // Validate Updated Data
    expect(responseBody.name).toBe('UpdatedUser');

    // Validate updatedAt is present
    expect(responseBody.updatedAt).toBeTruthy();

    // Validate API call succeeded
    expect(response.ok()).toBeTruthy();

});