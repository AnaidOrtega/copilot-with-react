import { UseFormRegisterReturn } from 'react-hook-form';

export interface FormInputProps {
  id: string;
  type: string;
  label: string;
  error?: string;
  className?: string;
  isInvalid: boolean;
  registerConfig: UseFormRegisterReturn;
}
