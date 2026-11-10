import { test, expect } from '@playwright/test';

test('Automation Exercise - Complete Multi-Step Registration Flow', async ({ page }) => {
  // Step 1: Target site par jayein aur Signup page open karein
  await page.goto('https://automationexercise.com/login');

  // Verify karein ke Signup box screen par visible hai
  await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();

  // Step 1 Form: Name aur unique Email enter karein
  const uniqueEmail = `qa_tester_${Date.now()}@example.com`;
  await page.getByPlaceholder('Name').fill('Romaisa Tester');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(uniqueEmail);
  await page.getByRole('button', { name: 'Signup' }).click();

  // Step 2 Form: Account Information fill karein
  await expect(page.getByText('Enter Account Information')).toBeVisible();

  await page.getByLabel('Mrs.').check();
  await page.getByLabel('Password *').fill('SecurePass123!');
  await page.locator('#days').selectOption('15');
  await page.locator('#months').selectOption('5');
  await page.locator('#years').selectOption('1998');

  // Step 3 Form: Address Information fill karein
  await page.getByLabel('First name *').fill('Romaisa');
  await page.getByLabel('Last name *').fill('Mukhtiar');
  await page.getByLabel('Address * (Street address, P.').fill('Plot 45, Main Boulevard');
  await page.getByLabel('Country *').selectOption('Canada');
  await page.getByLabel('State *').fill('Ontario');
  await page.getByLabel('City *').fill('Toronto');
  await page.locator('#zipcode').fill('M5V 2T6');
  await page.getByLabel('Mobile Number *').fill('1234567890');

  // Submit button click karein
  await page.getByRole('button', { name: 'Create Account' }).click();

  // Assertions: Final verification
  await expect(page).toHaveURL(/.*account_created/);
  await expect(page.getByText('Account Created!')).toBeVisible();
});