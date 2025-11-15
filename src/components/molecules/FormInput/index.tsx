import { Form } from 'react-bootstrap';
import { UseFormRegisterReturn } from 'react-hook-form';

interface FormInputProps {
  id: string;
  type: string;
  label: string;
  error?: string;
  className?: string;
  isInvalid: boolean;
  registerConfig: UseFormRegisterReturn;
}

const FormInput = ({
  id,
  type,
  error,
  label,
  className,
  isInvalid,
  registerConfig,
}: FormInputProps) => {
  return (
    <Form.Group className={className}>
      <Form.Label htmlFor={id}>{label}</Form.Label>
      <Form.Control
        id={id}
        type={type}
        {...registerConfig}
        isInvalid={isInvalid}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default FormInput;
