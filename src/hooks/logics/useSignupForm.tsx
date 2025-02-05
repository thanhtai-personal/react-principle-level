import { Input } from '@/components/common/shadcn/input';
import { useMemo } from 'react';
import { z } from 'zod';

export const useSignupForm = () => {
  const formSchema = useMemo(
    () =>
      z.object({
        username: z.string().min(1, 'Username is required'),
        email: z.string().email('Invalid email address'),
        password: z
          .string()
          .min(8, 'Invalid password')
          .max(30, 'Invalid password'),
      }),
    []
  );

  const fields = useMemo(
    () => [
      {
        key: 'username',
        name: 'username',
        label: 'Username',
        renderInput: (field: any) => (
          <Input {...field} placeholder="Enter your username" />
        ),
      },
      {
        key: 'email',
        name: 'email',
        label: 'Email',
        renderInput: (field: any) => (
          <Input {...field} placeholder="Enter your email" />
        ),
      },
      {
        key: 'password',
        name: 'password',
        label: 'Password',
        renderInput: (field: any) => (
          <Input {...field} type="password" placeholder="Enter your Password" />
        ),
      },
    ],
    []
  );

  return {
    formSchema,
    fields,
  };
};
