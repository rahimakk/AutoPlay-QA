import { test } from '@playwright/test';
import { loginpage } from '../pages/loginpage';

test.describe('Login Tests', () => {
  test('valid login', async ({ page }) => {
    const login = new loginpage(page);
    await login.navigate();
    await login.login("standard_user", "secret_sauce");
    await login.checksuccessfullogin();

  });

  test('Login with empty username', async ({ page }) => {
    const login = new loginpage(page);
    await login.navigate();
    await login.login("", "secret_sauce");
    await login.checkerrormsg("Epic sadface: Username is required");
  });
})