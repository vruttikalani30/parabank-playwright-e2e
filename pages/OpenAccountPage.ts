import { Page, expect } from '@playwright/test';

export class OpenAccountPage {
  constructor(private page: Page) {}

  async openSavingsAccount(): Promise<string> {
    await this.page.click('text=Open New Account');
    await this.page.selectOption('#type', '1');
    await this.page.click('input[value="Open New Account"]');

    const accountNumber = await this.page.locator('#newAccountId').textContent();
    expect(accountNumber).not.toBeNull();
    return accountNumber!;
  }
}
