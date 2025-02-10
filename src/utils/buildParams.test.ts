import { describe, it, expect } from 'vitest';
import { buildParams } from './buildParams';

describe('buildParams function', () => {
  it('should remove null, undefined, and empty string values', () => {
    const input = { a: 1, b: null, c: undefined, d: '', e: 'hello' };
    const output = buildParams(input);
    expect(output).toEqual({ a: 1, e: 'hello' });
  });

  it('should keep falsy values like 0, false, and empty arrays', () => {
    const input = { a: 0, b: false, c: [], d: 'valid' };
    const output = buildParams(input);
    expect(output).toEqual({ a: 0, b: false, c: [], d: 'valid' });
  });

  it('should work with nested objects', () => {
    const input = { a: { b: 1 }, c: null, d: 'ok' };
    const output = buildParams(input);
    expect(output).toEqual({ a: { b: 1 }, d: 'ok' });
  });

  it('should handle an empty object', () => {
    expect(buildParams({})).toEqual({});
  });

  it('should return an empty object if all values are null, undefined, or empty strings', () => {
    const input = { a: null, b: undefined, c: '' };
    expect(buildParams(input)).toEqual({});
  });
});
