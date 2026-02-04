import { Page, expect } from '@playwright/test';

export class BillPayPage {
  constructor(private page: Page) {}

  async payBill(accountId: string, amount: string) {
    await this.page.click('a[href*="billpay.htm"]');

    await this.page.fill('input[name="payee.name"]', 'Electricity');
    await this.page.fill('input[name="payee.address.street"]', 'Street');
    await this.page.fill('input[name="payee.address.city"]', 'City');
    await this.page.fill('input[name="payee.address.state"]', 'State');
    await this.page.fill('input[name="payee.address.zipCode"]', '400001');
    await this.page.fill('input[name="payee.phoneNumber"]', '9999999999');
    await this.page.fill('input[name="payee.accountNumber"]', '12345');
    await this.page.fill('input[name="verifyAccount"]', '12345');
    await this.page.fill('input[name="amount"]', amount);
    await this.page.selectOption('select[name="fromAccountId"]', accountId);

    await this.page.click('input[value="Send Payment"]');

    await expect(
      this.page.locator('text=Bill Payment Complete')
    ).toBeVisible();
  }
}
