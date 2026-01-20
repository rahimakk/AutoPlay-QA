import { test, expect } from '@playwright/test';
test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page.locator('.title')).toHaveText('Products');
});

test('Login with invalid credentials', async ({page}) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name','wrong_user');
    await page.fill('#password', "wrong_password");
    await page.click("#login-button");
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
});

