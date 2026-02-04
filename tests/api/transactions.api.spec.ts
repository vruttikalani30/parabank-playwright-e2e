import { test, expect } from '@playwright/test';
import { findTransactionByAmount } from '../../utils/apiHelper';

test('Find transaction by amount API', async ({ request }) => {
  const accountId = '12345';
  const amount = '5';

  const response = await findTransactionByAmount(request, accountId, amount);
  expect(response.ok()).toBeTruthy();

  const json = await response.json();
  expect(json.transactions.length).toBeGreaterThan(0);
  expect(json.transactions[0].amount).toBe(amount);
});
