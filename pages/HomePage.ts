import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async verifyGlobalMenu() {
    const menuItems = [
      'Open New Account',
      'Accounts Overview',
      'Transfer Funds',
      'Bill Pay',
      'Find Transactions'
    ];

    for (const item of menuItems) {
      await this.page.click(`text=${item}`);
      await expect(this.page.locator('h1, h2')).toContainText(item);
    }
  }
}
