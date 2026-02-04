import { APIRequestContext } from '@playwright/test';

export async function findTransactionsByAmount(
  request: APIRequestContext,
  accountId: string,
  amount: string
) {
  return request.get(
    `/parabank/services_proxy/bank/accounts/${accountId}/transactions/amount/${amount}?timeout=30000`
  );
}
