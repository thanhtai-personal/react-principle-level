import { describe, it, expect } from 'vitest';
import { get } from './get';

describe('get function', () => {
  const example = {
    a: { b: { c: 42, d: null, e: 0, f: '' } },
    g: [10, 20, 30],
  };

  it('should retrieve a nested value', () => {
    expect(get(example, 'a.b.c')).toBe(42);
    expect(get(example, ['a', 'b', 'c'])).toBe(42);
  });

  it('should return the default value if the path does not exist', () => {
    expect(get(example, 'a.b.x', 'default')).toBe('default');
    expect(get(example, ['a', 'b', 'x'], 'default')).toBe('default');
  });

  it('should handle null, false, 0, and empty string values correctly', () => {
    expect(get(example, 'a.b.d', 'default')).toBe(null); // Should return null, not default
    expect(get(example, 'a.b.e', 'default')).toBe(0); // Should return 0, not default
    expect(get(example, 'a.b.f', 'default')).toBe(''); // Should return '', not default
  });

  it('should handle array paths correctly', () => {
    expect(get(example, ['g', '1'])).toBe(20); // Access array index
    expect(get(example, ['g', '5'], 'not found')).toBe('not found'); // Out of bounds
  });

  it('should return the default value for non-object inputs', () => {
    expect(get(null, 'a.b.c', 'default')).toBe('default');
    expect(get(undefined, 'a.b.c', 'default')).toBe('default');
    expect(get(42 as any, 'a.b.c', 'default')).toBe('default'); // Non-object number
    expect(get('string' as any, 'a.b.c', 'default')).toBe('default'); // Non-object string
  });
});
