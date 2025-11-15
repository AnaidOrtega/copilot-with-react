import { useForm } from 'react-hook-form';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { RegisterFormData } from './types';
import { FormInput } from '../../components/molecules';
import { formConfig } from './formConfig';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      // Handle form submission here
      console.log('Form submitted:', data);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center mb-4">Register Page</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {formConfig.map(
              ({ label, type, id, validation, isInvalid, errorMessage }) => (
                <FormInput
                  key={id}
                  label={label}
                  className="mb-3"
                  type={type}
                  id={id}
                  registerConfig={register(
                    id as keyof RegisterFormData,
                    validation,
                  )}
                  isInvalid={isInvalid(errors)}
                  error={errorMessage(errors)}
                />
              ),
            )}
            <Button
              variant="primary"
              type="submit"
              className="w-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
