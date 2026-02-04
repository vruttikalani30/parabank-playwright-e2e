import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async verifyGlobalMenu() {
    const menu = [
      'Open New Account',
      'Accounts Overview',
      'Transfer Funds',
      'Bill Pay',
      'Find Transactions'
    ];

    for (const item of menu) {
      await this.page.click(`a:has-text("${item}")`);
      await expect(this.page.locator('h1')).toContainText(item);
    }
  }
}
