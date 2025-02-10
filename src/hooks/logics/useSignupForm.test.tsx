import { renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { useSignupForm } from '@/hooks/logics/useSignupForm';

describe('useSignupForm', () => {
  test('should return a valid form schema', () => {
    const { result } = renderHook(() => useSignupForm());

    expect(result.current.formSchema).toBeDefined();
    expect(
      result.current.formSchema.safeParse({
        username: '',
        email: 'invalid',
        password: 'short',
      }).success
    ).toBe(false);
    expect(
      result.current.formSchema.safeParse({
        username: 'user',
        email: 'test@example.com',
        password: 'validpassword',
      }).success
    ).toBe(true);
  });

  test('should return correct fields configuration', () => {
    const { result } = renderHook(() => useSignupForm());

    expect(result.current.fields).toHaveLength(3);
    expect(result.current.fields.map((field: any) => field.name)).toEqual([
      'username',
      'email',
      'password',
    ]);
  });

  test('fields should have correct labels and placeholders', () => {
    const { result } = renderHook(() => useSignupForm());

    expect(result.current.fields[0]).toMatchObject({
      name: 'username',
      label: 'Username',
    });
    expect(result.current.fields[1]).toMatchObject({
      name: 'email',
      label: 'Email',
    });
    expect(result.current.fields[2]).toMatchObject({
      name: 'password',
      label: 'Password',
    });
  });
});
