import { test } from '@playwright/test';
import { generateUser } from '../../utils/testData';
import {
  RegisterPage,
  LoginPage,
  HomePage,
  OpenAccountPage,
  AccountsOverviewPage,
  TransferFundsPage,
  BillPayPage
} from '../../pages';

test('ParaBank full E2E flow (UI + Data)', async ({ page }) => {
  const user = generateUser();
  await page.goto('/index.htm');

  await new RegisterPage(page).register(user);
  await new LoginPage(page).login(user.username, user.password);

  await new HomePage(page).verifyGlobalMenu();

  const accountId = await new OpenAccountPage(page).openSavingsAccount();
  await new AccountsOverviewPage(page).verifyAccountVisible(accountId);

  await new TransferFundsPage(page).transferFunds(accountId, accountId, '10');
  await new BillPayPage(page).payBill(accountId, '5');
});
