import Account, { AccountRequest } from '../types/account';
import instance from '../api/axios';

const accountAPIAddress = {
  getAccounts: '/api/accounts',
  createAccount: '/api/accounts',
  deleteAccount: '/api/accounts',
};
export default {
  getAccountsById: async (id: number): Promise<Account[]> => {
    const response = await instance.get(accountAPIAddress.getAccounts, {
      params: {
        accountbook_id: id,
      },
    });

    return response.data;
  },
  createAccount: async (account: AccountRequest): Promise<Account> => {
    const response = await instance.post(accountAPIAddress.createAccount, account);
    return response.data;
  },
  deleteAccount: async (accountId: number): Promise<number> => {
    try {
      await instance.delete(accountAPIAddress.deleteAccount + `/${accountId}`);
      return accountId;
    } catch {
      throw new Error('삭제 실패');
    }
  },
};
