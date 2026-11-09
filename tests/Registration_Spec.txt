import { test, expect } from '@playwright/test';

test('User can register successfully', async ({ page }) => {
  // Open the registration page
  await page.goto('https://example.com/register');

  // Fill in the registration form
  await page.fill('#firstName', 'Jane');
  await page.fill('#lastName', 'Doe');
  await page.fill('#email', 'jane.doe@example.com');
  await page.fill('#password', 'Password123!');
  await page.fill('#confirmPassword', 'Password123!');

  // Accept the terms and conditions
  await page.check('#acceptTerms');

  // Submit the form
  await page.click('button[type="submit"]');

  // Verify successful registration
  await expect(page.locator('h1')).toHaveText('Welcome!');
  await expect(page.locator('.success-message')).toContainText(
    'Your account has been created successfully.'
  );
});