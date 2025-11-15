import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Register from '../';

describe('Register Component', () => {
  it('shows validation errors for empty required fields', async () => {
    const user = userEvent.setup();
    render(<Register />);

    const submitButton = screen.getByRole('button', { name: /register/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('First name is required')).toBeInTheDocument();
      expect(screen.getByText('Last name is required')).toBeInTheDocument();
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Password is required')).toBeInTheDocument();
      expect(
        screen.getByText('Please confirm your password'),
      ).toBeInTheDocument();
    });
  });

  it('shows validation error for first name less than 2 characters', async () => {
    const user = userEvent.setup();
    render(<Register />);

    const firstNameInput = screen.getByLabelText(/first name/i);
    await user.type(firstNameInput, 'A');
    await user.tab();

    await waitFor(() => {
      expect(
        screen.getByText('First name must be at least 2 characters'),
      ).toBeInTheDocument();
    });
  });

  it('shows validation error for last name less than 2 characters', async () => {
    const user = userEvent.setup();
    render(<Register />);

    const lastNameInput = screen.getByLabelText(/last name/i);
    await user.type(lastNameInput, 'B');
    await user.tab();

    await waitFor(() => {
      expect(
        screen.getByText('Last name must be at least 2 characters'),
      ).toBeInTheDocument();
    });
  });

  it('shows validation error for invalid email format', async () => {
    const user = userEvent.setup();
    render(<Register />);

    const emailInput = screen.getByLabelText(/^email$/i);
    await user.type(emailInput, 'invalid-email');
    await user.tab();

    await waitFor(() => {
      expect(screen.getByText('Invalid email address')).toBeInTheDocument();
    });
  });

  it('shows validation error for password less than 8 characters', async () => {
    const user = userEvent.setup();
    render(<Register />);

    const passwordInput = screen.getByLabelText(/^password$/i);
    await user.type(passwordInput, 'Pass1');
    await user.tab();

    await waitFor(() => {
      expect(
        screen.getByText('Password must be at least 8 characters'),
      ).toBeInTheDocument();
    });
  });

  it('shows validation error for password without uppercase, lowercase, and number', async () => {
    const user = userEvent.setup();
    render(<Register />);

    const passwordInput = screen.getByLabelText(/^password$/i);
    await user.type(passwordInput, 'password');
    await user.tab();

    await waitFor(() => {
      expect(
        screen.getByText(
          'Password must contain at least one lowercase, one uppercase, and one number',
        ),
      ).toBeInTheDocument();
    });
  });

  it('shows validation error when passwords do not match', async () => {
    const user = userEvent.setup();
    render(<Register />);

    const passwordInput = screen.getByLabelText(/^password$/i);
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i);

    await user.type(passwordInput, 'Password123');
    await user.type(confirmPasswordInput, 'Password456');
    await user.tab();

    await waitFor(() => {
      expect(screen.getByText('Passwords do not match')).toBeInTheDocument();
    });
  });

  it('submits form successfully with valid data', async () => {
    const user = userEvent.setup();
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    render(<Register />);

    await user.type(screen.getByLabelText(/first name/i), 'John');
    await user.type(screen.getByLabelText(/last name/i), 'Doe');
    await user.type(screen.getByLabelText(/^email$/i), 'john.doe@example.com');
    await user.type(screen.getByLabelText(/^password$/i), 'Password123');
    await user.type(screen.getByLabelText(/confirm password/i), 'Password123');

    const submitButton = screen.getByRole('button', { name: /register/i });
    await user.click(submitButton);

    expect(submitButton).toHaveTextContent('Registering...');
    expect(submitButton).toBeDisabled();

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Form submitted:', {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'Password123',
        confirmPassword: 'Password123',
      });
      expect(submitButton).toHaveTextContent('Register');
      expect(submitButton).not.toBeDisabled();
    });

    consoleSpy.mockRestore();
  });

  it('accepts valid email formats', async () => {
    const user = userEvent.setup();
    render(<Register />);

    const emailInput = screen.getByLabelText(/^email$/i);
    await user.type(emailInput, 'valid.email@example.com');
    await user.tab();

    await waitFor(() => {
      expect(
        screen.queryByText('Invalid email address'),
      ).not.toBeInTheDocument();
    });
  });

  it('accepts valid password format', async () => {
    const user = userEvent.setup();
    render(<Register />);

    const passwordInput = screen.getByLabelText(/^password$/i);
    await user.type(passwordInput, 'ValidPass123');
    await user.tab();

    await waitFor(() => {
      expect(
        screen.queryByText(
          'Password must contain at least one lowercase, one uppercase, and one number',
        ),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText('Password must be at least 8 characters'),
      ).not.toBeInTheDocument();
    });
  });
});
