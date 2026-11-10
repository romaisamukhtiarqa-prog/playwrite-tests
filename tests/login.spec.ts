import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('listitem').filter({ hasText: 'Signup / Login' }).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('testuser@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('pasword123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
});