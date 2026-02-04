import { Page, expect } from '@playwright/test';

export class RegisterPage {
  constructor(private page: Page) {}

  async register(user: any) {
    await this.page.click('a[href*="register.htm"]');

    await page.fill('input[name="customer.firstName"]', user.firstName);
    await page.fill('input[name="customer.lastName"]', user.lastName);
    await page.fill('input[name="customer.address.street"]', user.address);
    await page.fill('input[name="customer.address.city"]', user.city);
    await page.fill('input[name="customer.address.state"]', user.state);
    await page.fill('input[name="customer.address.zipCode"]', user.zip);
    await page.fill('input[name="customer.phoneNumber"]', user.phone);
    await page.fill('input[name="customer.ssn"]', user.ssn);
    await page.fill('input[name="customer.username"]', user.username);
    await page.fill('input[name="customer.password"]', user.password);
    await page.fill('input[name="repeatedPassword"]', user.password);

    await this.page.click('input[value="Register"]');

    await expect(
      this.page.locator('text=Your account was created successfully')
    ).toBeVisible();
  }
}
