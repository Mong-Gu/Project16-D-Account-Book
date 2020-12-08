export interface Account {
  id: number;
  name: string;
  color: string;
}

export interface AccountRequest {
  accountbookId: number;
  id: number;
  name: string;
  color: string;
}

export default Account;
