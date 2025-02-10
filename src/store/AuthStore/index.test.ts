import { describe, it, expect } from 'vitest';
import { AuthStore } from '.';

describe('AuthStore', () => {
  it('should initialize with undefined values', () => {
    const store = new AuthStore();

    expect(store.profile).toBeUndefined();
    expect(store.loginData).toBeUndefined();
    expect(store.roleData).toBeUndefined();
  });

  it('should be an observable store', () => {
    const store = new AuthStore();
    expect(typeof store).toBe('object');
    expect(store).toHaveProperty('profile');
    expect(store).toHaveProperty('loginData');
    expect(store).toHaveProperty('roleData');
  });
});
