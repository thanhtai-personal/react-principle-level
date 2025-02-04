import { IStoreData } from '@/interfaces/IStoreData';
import { createMobxContext } from './utils';
import { makeObservable } from 'mobx';
import { AuthStore } from './AuthStore';

class StoreData implements IStoreData {
  public auth: AuthStore;

  constructor() {
    this.auth = new AuthStore();
    makeObservable(this);
  }
}

export const AppStore = createMobxContext<StoreData>(new StoreData());

export const useStore = AppStore.getUseStore();
