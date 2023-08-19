import { Formik } from 'formik';
import {
  StyledForm,
  StyledField,
  StyledErrorMessage,
  StyledButton,
} from './ContactForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const phoneRegex = RegExp(
  /^\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}$/
);

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(phoneRegex, 'Invalid phone')
    .required('Phone is required'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        onAdd({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <StyledForm>
        <label>
          Name
          <StyledField name="name" placeholder="Name" />
          <StyledErrorMessage name="name" component="span" />
        </label>

        <label>
          Number
          <StyledField name="number" placeholder="Number phone" type="tel" />
          <StyledErrorMessage name="number" component="span" />
        </label>

        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </Formik>
  );
};
