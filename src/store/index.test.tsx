import { describe, it, expect, vi } from 'vitest';
import { makeObservable } from 'mobx';
import { AuthStore } from './AuthStore';
import { UIStore } from './UIStore';
import { AppStore, useStore } from '.';

// Mock MobX functions
vi.mock('mobx', () => ({
  makeObservable: vi.fn(),
}));

// Mock AuthStore and UIStore
vi.mock('./AuthStore', () => ({
  AuthStore: vi.fn(() => ({ isAuthenticated: false })),
}));

vi.mock('./UIStore', () => ({
  UIStore: vi.fn(() => ({ showHeader: true })),
}));

// Mock createMobxContext
vi.mock('./utils', () => ({
  createMobxContext: vi.fn((store) => ({
    getUseStore: vi.fn(() => () => store),
    MobxProvider: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="mobx-provider">{children}</div>
    ),
  })),
}));

describe('AppStore', () => {
  it('should initialize StoreData with auth and ui stores', () => {
    expect(AuthStore).toHaveBeenCalledTimes(1);
    expect(UIStore).toHaveBeenCalledTimes(1);
    expect(makeObservable).toHaveBeenCalled();
  });

  it('should create a MobX store and return correct data', () => {
    const store = useStore();
    expect(store.auth).toEqual({ isAuthenticated: false });
    expect(store.ui).toEqual({ showHeader: true });
  });

  it('should provide a MobxProvider component', () => {
    expect(AppStore.MobxProvider).toBeDefined();
  });
});
