import { FieldErrors } from 'react-hook-form';
import { RegisterFormData } from './types';

export const formConfig = [
  {
    label: 'First Name',
    type: 'text',
    id: 'firstName',
    validation: {
      required: 'First name is required',
      minLength: {
        value: 2,
        message: 'First name must be at least 2 characters',
      },
    },
    isInvalid: (errors: FieldErrors<RegisterFormData>) => !!errors.firstName,
    errorMessage: (errors: FieldErrors<RegisterFormData>) =>
      errors.firstName?.message,
  },
  {
    label: 'Last Name',
    type: 'text',
    id: 'lastName',
    validation: {
      required: 'Last name is required',
      minLength: {
        value: 2,
        message: 'Last name must be at least 2 characters',
      },
    },
    isInvalid: (errors: FieldErrors<RegisterFormData>) => !!errors.lastName,
    errorMessage: (errors: FieldErrors<RegisterFormData>) =>
      errors.lastName?.message,
  },
  {
    label: 'Email',
    type: 'email',
    id: 'email',
    validation: {
      required: 'Email is required',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Invalid email address',
      },
    },
    isInvalid: (errors: FieldErrors<RegisterFormData>) => !!errors.email,
    errorMessage: (errors: FieldErrors<RegisterFormData>) =>
      errors.email?.message,
  },
  {
    label: 'Password',
    type: 'password',
    id: 'password',
    validation: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must be at least 8 characters',
      },
    },
    isInvalid: (errors: FieldErrors<RegisterFormData>) => !!errors.password,
    errorMessage: (errors: FieldErrors<RegisterFormData>) =>
      errors.password?.message,
  },
  {
    label: 'Confirm Password',
    type: 'password',
    id: 'confirmPassword',
    validation: {
      required: 'Please confirm your password',
      validate: (value: string, formData: RegisterFormData) =>
        value === formData.password || 'Passwords do not match',
    },
    isInvalid: (errors: FieldErrors<RegisterFormData>) =>
      !!errors.confirmPassword,
    errorMessage: (errors: FieldErrors<RegisterFormData>) =>
      errors.confirmPassword?.message,
  },
];
