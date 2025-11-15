import { Form } from 'react-bootstrap';
import { FormInputProps } from '.';

/**
 * A form input component that wraps React Bootstrap's Form.Group with integrated validation feedback.
 *
 * @param {FormInputProps} props - The component props
 * @param {string} props.id - The unique identifier for the input element
 * @param {string} props.type - The type attribute for the input (e.g., 'text', 'email', 'password')
 * @param {string} [props.error] - The error message to display when validation fails
 * @param {string} props.label - The label text to display for the input
 * @param {string} [props.className] - Optional CSS class name for the Form.Group wrapper
 * @param {boolean} [props.isInvalid] - Whether the input is in an invalid state
 * @param {object} props.registerConfig - Configuration object for form registration (typically from react-hook-form)
 *
 * @returns {JSX.Element} A controlled form input with label and validation feedback
 */

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
