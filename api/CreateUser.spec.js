const { test, expect } = require('@playwright/test');

test('Create User', async ({ request }) => {

  const response = await request.post(
    'https://reqres.in/api/users',
    {
      data: {
        name: 'Speedex',
        job: 'QA'
      }
    }
  );

  // Status Code Validation
  expect(response.status()).toBe(201);

  // Response Text
  const responseText = await response.text();
  console.log('Response Text:', responseText);

  // JSON Response
  const responseBody = await response.json();
  console.log('Response JSON:', responseBody);

  // Field Validations
  expect(responseBody.name).toBe('Speedex');
  expect(responseBody.job).toBe('QA');

  // Dynamic Field Validations
  expect(responseBody.id).toBeTruthy();
  expect(responseBody.createdAt).toBeTruthy();

});