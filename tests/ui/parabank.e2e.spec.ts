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

test('ParaBank E2E UI Flow', async ({ page }) => {
  const user = generateUser();
  await page.goto('/parabank/index.htm');

  await new RegisterPage(page).register(user);
  await new LoginPage(page).login(user.username, user.password);

  await new HomePage(page).verifyGlobalMenu();

  const openAccountPage = new OpenAccountPage(page);
  const accountNumber = await openAccountPage.openSavingsAccount();

  await new AccountsOverviewPage(page).validateBalance(accountNumber);

  await new TransferFundsPage(page).transfer(accountNumber, accountNumber, '10');
  await new BillPayPage(page).payBill(accountNumber, '5');
});
