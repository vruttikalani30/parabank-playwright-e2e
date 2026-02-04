import { Page, expect } from '@playwright/test';

export class TransferFundsPage {
  constructor(private page: Page) {}

  async transferFunds(from: string, to: string, amount: string) {
    await this.page.click('a[href*="transfer.htm"]');

    await this.page.fill('#amount', amount);
    await this.page.selectOption('#fromAccountId', from);
    await this.page.selectOption('#toAccountId', to);
    await this.page.click('input[value="Transfer"]');

    await expect(
      this.page.locator('text=Transfer Complete!')
    ).toBeVisible();
  }
}
