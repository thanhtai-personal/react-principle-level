import { describe, it, expect } from 'vitest';
import { set } from './set';

describe('set function', () => {
  it('should set a nested property', () => {
    const obj = { a: { b: { c: 42 } } };
    set(obj, 'a.b.c', 100);
    expect(obj.a.b.c).toBe(100);
  });

  it('should create missing objects along the path', () => {
    const obj: any = { a: {} };
    set(obj, 'a.d.e', 'new');
    expect(obj.a.d.e).toBe('new');
  });

  it('should throw an error if target is not an object', () => {
    expect(() => set(null, 'a.b', 10)).toThrow('Target must be an object');
    expect(() => set(42, 'a.b', 10)).toThrow('Target must be an object');
  });

  it('should support array paths', () => {
    const obj: any = {};
    set(obj, ['x', 'y', 'z'], 50);
    expect(obj.x.y.z).toBe(50);
  });
});
