import { Page, expect } from '@playwright/test';

export class OpenAccountPage {
  constructor(private page: Page) {}

  async openSavingsAccount(): Promise<string> {
    await this.page.click('a[href*="openaccount.htm"]');

    await this.page.selectOption('#type', '1');
    await this.page.click('input[value="Open New Account"]');

    const accountId = await this.page.locator('#newAccountId').textContent();
    expect(accountId).toBeTruthy();

    return accountId!.trim();
  }
}
