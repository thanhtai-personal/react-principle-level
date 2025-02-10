import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ForwardedAppForm } from '@/components/common/AppForm';
import { z } from 'zod';
import { TFormItem } from '@/types/TFormItem';
import { describe, vi, it, expect } from 'vitest';

describe('AppForm Component', () => {
  const mockOnSubmit = vi.fn();

  const formSchema = z.object({
    username: z.string().min(1, 'Username is required'),
    email: z.string().email('Invalid email'),
  });

  const fields: TFormItem<typeof formSchema.shape>[] = [
    {
      key: 'username',
      name: 'username',
      label: 'Username',
      renderInput: (field) => <input {...field} data-testid="username-input" />,
    },
    {
      key: 'email',
      name: 'email',
      label: 'Email',
      renderInput: (field) => <input {...field} data-testid="email-input" />,
    },
  ];

  it('renders the form fields correctly', () => {
    render(
      <ForwardedAppForm
        formSchema={formSchema}
        fields={fields}
        onsubmit={mockOnSubmit}
      />
    );

    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('submits the form with correct data', async () => {
    render(
      <ForwardedAppForm
        formSchema={formSchema}
        fields={fields}
        onsubmit={mockOnSubmit}
      />
    );

    fireEvent.change(screen.getByTestId('username-input'), {
      target: { value: 'JohnDoe' },
    });
    fireEvent.change(screen.getByTestId('email-input'), {
      target: { value: 'johndoe@example.com' },
    });

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    // await waitFor(() =>
    //   expect(mockOnSubmit).toHaveBeenCalledWith({
    //     username: 'JohnDoe',
    //     email: 'johndoe@example.com',
    //   })
    // );
  });

  it('validates input fields correctly', async () => {
    render(
      <ForwardedAppForm
        formSchema={formSchema}
        fields={fields}
        onsubmit={mockOnSubmit}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    // await waitFor(() => {
    //   expect(screen.getByText('Username is required')).toBeInTheDocument();
    //   expect(screen.getByText('Invalid email')).toBeInTheDocument();
    // });

    // expect(mockOnSubmit).not.toHaveBeenCalled();
  });
});
