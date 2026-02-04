import { test, expect } from '@playwright/test';
import { findTransactionsByAmount } from '../../utils/apiHelper';

test('Validate transaction search by amount', async ({ request }) => {
  const accountId = '12345'; // replace dynamically if needed
  const amount = '5';

  const response = await findTransactionsByAmount(request, accountId, amount);
  expect(response.ok()).toBeTruthy();

  const json = await response.json();
  expect(json.transactions.length).toBeGreaterThan(0);
  expect(json.transactions[0].amount).toBe(amount);
});
