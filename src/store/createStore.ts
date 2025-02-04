import { createMobxContext } from './utils';

export const createStore = <StoreDataType>(initialData: StoreDataType) => {
  const store = createMobxContext<StoreDataType>(initialData);

  return {
    useStore: store.getUseStore(),
    Provider: store.MobxProvider,
  };
};
