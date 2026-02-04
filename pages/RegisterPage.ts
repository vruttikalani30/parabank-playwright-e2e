import { Page, expect } from '@playwright/test';

export class RegisterPage {
  constructor(private page: Page) {}

  async register(user: any) {
    await this.page.click('text=Register');
    await this.page.fill('#customer.firstName', user.firstName);
    await this.page.fill('#customer.lastName', user.lastName);
    await this.page.fill('#customer.address.street', user.address);
    await this.page.fill('#customer.address.city', user.city);
    await this.page.fill('#customer.address.state', user.state);
    await this.page.fill('#customer.address.zipCode', user.zipCode);
    await this.page.fill('#customer.phoneNumber', user.phone);
    await this.page.fill('#customer.ssn', user.ssn);
    await this.page.fill('#customer.username', user.username);
    await this.page.fill('#customer.password', user.password);
    await this.page.fill('#repeatedPassword', user.password);
    await this.page.click('input[value="Register"]');

    await expect(this.page.locator('text=Your account was created successfully')).toBeVisible();
  }
}
