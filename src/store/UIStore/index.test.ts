import { describe, it, expect } from 'vitest';
import { UIStore } from '.';

describe('UIStore', () => {
  it('should initialize with default values', () => {
    const store = new UIStore();

    expect(store.showHeader).toBe(true);
    expect(store.showFooter).toBe(true);
    expect(store.useLeftDrawer).toBe(false);
    expect(store.useRightDrawer).toBe(false);
    expect(store.fixedHeader).toBe(false);
  });

  it('should be an observable store', () => {
    const store = new UIStore();
    expect(typeof store).toBe('object');
    expect(store).toHaveProperty('showHeader');
    expect(store).toHaveProperty('showFooter');
  });
});
