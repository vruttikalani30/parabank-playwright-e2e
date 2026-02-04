import { Page, expect } from '@playwright/test';

export class AccountsOverviewPage {
  constructor(private page: Page) {}

  async verifyAccountVisible(accountId: string) {
    await this.page.click('a[href*="overview.htm"]');
    await expect(this.page.locator(`a:has-text("${accountId}")`)).toBeVisible();
  }
}
