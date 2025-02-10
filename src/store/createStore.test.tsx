import { describe, it, expect, vi } from 'vitest';
import { createStore } from './createStore';
import { createMobxContext } from './utils';

// Mock createMobxContext to return a fake store
vi.mock('./utils', () => ({
  createMobxContext: vi.fn(() => ({
    getUseStore: vi.fn(() => () => ({ test: 'mockedStore' })),
    MobxProvider: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="mobx-provider">{children}</div>
    ),
  })),
}));

describe('createStore', () => {
  it('should create a store with useStore and Provider', () => {
    const initialData = { count: 0 };
    const store = createStore(initialData);

    expect(createMobxContext).toHaveBeenCalledWith(initialData);
    expect(store.useStore).toBeDefined();
    expect(store.Provider).toBeDefined();
  });

  it('should return mocked store data from useStore', () => {
    const initialData = { count: 0 };
    const store = createStore(initialData);
    const useStore = store.useStore();

    expect(useStore).toEqual({ test: 'mockedStore' });
  });
});
