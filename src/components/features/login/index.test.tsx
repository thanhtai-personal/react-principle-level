import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LoginModal } from '.';

describe('LoginModal Component', () => {
  it('renders the Edit Profile button', () => {
    render(<LoginModal />);
    expect(screen.getByText('Edit Profile')).toBeInTheDocument();
  });

  it('does not show the modal content initially', () => {
    render(<LoginModal />);
    expect(screen.queryByText('Edit profile')).not.toBeInTheDocument();
  });

  it('opens the modal when Edit Profile button is clicked', () => {
    render(<LoginModal />);

    const editProfileButton = screen.getByText('Edit Profile');
    fireEvent.click(editProfileButton);

    expect(screen.getByText('Edit profile')).toBeInTheDocument();
    expect(
      screen.getByText(
        "Make changes to your profile here. Click save when you're done."
      )
    ).toBeInTheDocument();
  });

  it('displays the name and username input fields with default values', () => {
    render(<LoginModal />);

    fireEvent.click(screen.getByText('Edit Profile'));

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Username')).toBeInTheDocument();

    expect(screen.getByDisplayValue('Pedro Duarte')).toBeInTheDocument();
    expect(screen.getByDisplayValue('@peduarte')).toBeInTheDocument();
  });

  it('renders the Save Changes button inside the modal', () => {
    render(<LoginModal />);

    fireEvent.click(screen.getByText('Edit Profile'));

    expect(screen.getByText('Save changes')).toBeInTheDocument();
  });
});
