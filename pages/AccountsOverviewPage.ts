import { Page, expect } from '@playwright/test';

export class AccountsOverviewPage {
  constructor(private page: Page) {}

  async validateBalance(accountNumber: string) {
    await this.page.click('text=Accounts Overview');
    await expect(this.page.locator(`text=${accountNumber}`)).toBeVisible();
  }
}
