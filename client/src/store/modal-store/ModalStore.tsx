import FormFilterStore from './FormFilterStore';
import RootStore from '../RootStore';
import CreateTransactionFormStore from './CreateTransactionFormStore';
import UpdateTransactionFormStore from './UpdateTransactionFormStore';
import CreateAccountFormStore from './CreateAccountFormStore';
import CreateCategoryFormStore from './CreateCategoryFormStore';

export default class ModalStore {
  rootStore: RootStore;
  formFilterStore: FormFilterStore;
  createTransactionFormStore: CreateTransactionFormStore;
  updateTransactionFormStore: UpdateTransactionFormStore;
  createAccountFormStore: CreateAccountFormStore;
  createCategoryFormStore: CreateCategoryFormStore;

  constructor(rootStore: RootStore) {
    this.formFilterStore = new FormFilterStore(rootStore);
    this.rootStore = rootStore;
    this.createTransactionFormStore = new CreateTransactionFormStore(rootStore);
    this.updateTransactionFormStore = new UpdateTransactionFormStore(rootStore);
    this.createAccountFormStore = new CreateAccountFormStore(rootStore);
    this.createCategoryFormStore = new CreateCategoryFormStore(rootStore);
  }
}
