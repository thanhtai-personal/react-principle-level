import { ReactNode, createContext, useContext } from 'react';

export interface MobxInstance<T> {
  MobxProvider: ({ children }: { children: ReactNode }) => ReactNode;
  getUseStore: <T>() => () => T;
}

export const createMobxContext = <T,>(initialData: T) => {
  const RootStoreContext = createContext<null | T>(null);

  const useStore = () => {
    const store = useContext(RootStoreContext);
    if (store === null) {
      console.log('Store cannot be null, please add a context provider');
    }
    return store || {};
  };

  const MobxProvider = ({ children }: { children: ReactNode }) => {
    return (
      <RootStoreContext.Provider value={initialData}>
        {children}
      </RootStoreContext.Provider>
    );
  };

  return {
    getUseStore: () => useStore,
    MobxProvider,
  } as MobxInstance<T>;
};
