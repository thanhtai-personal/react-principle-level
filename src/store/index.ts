import { IStoreData } from '@/interfaces/IStoreData';
import { createMobxContext } from './utils';
import { makeObservable } from 'mobx';
import { AuthStore } from './AuthStore';
import { UIStore } from './UIStore';

class StoreData implements IStoreData {
  public auth: AuthStore;
  public ui: UIStore;

  constructor() {
    this.auth = new AuthStore();
    this.ui = new UIStore();
    makeObservable(this);
  }
}

export const AppStore = createMobxContext<StoreData>(new StoreData());

export const useStore = AppStore.getUseStore<IStoreData>();
