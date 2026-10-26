const { test, expect } = require('@playwright/test');


test('GET User', async ({ request }) => {

    const response = await request.get(
        'https://reqres.in/api/users/2'
    );

    // Validate Status Code
    expect(response.status()).toBe(200);

    // Convert Response to JSON
    const responseBody = await response.json();

    console.log(responseBody);

    // Validate User Data
    expect(responseBody.data.id).toBe(2);
    expect(responseBody.data.email).toBe('janet.weaver@reqres.in');
    expect(responseBody.data.first_name).toBe('Janet');
    expect(responseBody.data.last_name).toBe('Weaver');

    // Validate Avatar Exists
    expect(responseBody.data.avatar).toBeTruthy();

    // Validate Support Section
    expect(responseBody.support).toBeTruthy();
    expect(responseBody.support.text).toContain('To keep ReqRes free');
});