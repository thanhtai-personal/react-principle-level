import { describe, it, expect } from 'vitest';
import { pickBy } from './pickBy';

describe('pickBy function', () => {
  it('should filter out properties that do not match the predicate', () => {
    const obj = { a: 1, b: 'hello', c: 3, d: null };

    // Filter only numbers
    const result = pickBy(obj, (value) => typeof value === 'number');

    expect(result).toEqual({ a: 1, c: 3 });
  });

  it('should return an empty object if no values match the predicate', () => {
    const obj = { a: 1, b: 'hello', c: 3 };

    // Filter only boolean values (none exist)
    const result = pickBy(obj, (value) => typeof value === 'boolean');

    expect(result).toEqual({});
  });

  it('should handle empty objects correctly', () => {
    const result = pickBy({}, () => true);
    expect(result).toEqual({});
  });

  it('should filter truthy values correctly', () => {
    const obj = { a: 1, b: '', c: 3, d: null, e: false, f: 'test' };

    const result = pickBy(obj, (value) => Boolean(value));

    expect(result).toEqual({ a: 1, c: 3, f: 'test' });
  });

  it('should throw an error if input is not an object', () => {
    expect(() => pickBy(null as any, () => true)).toThrow(
      'Input must be an object'
    );
    expect(() => pickBy(42 as any, () => true)).toThrow(
      'Input must be an object'
    );
  });
});
