import { APIRequestContext } from '@playwright/test';

export const findTransactionByAmount = async (
  request: APIRequestContext,
  accountId: string,
  amount: string
) => {
  return request.get(
    `/services_proxy/bank/accounts/${accountId}/transactions/amount/${amount}?timeout=30000`
  );
};
