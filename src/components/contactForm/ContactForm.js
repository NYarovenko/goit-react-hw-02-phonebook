import { Formik, Field, ErrorMessage } from 'formik';
import { StyledForm } from './ContactForm.styled';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(7, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <StyledForm>
        <label>
          Name
          <Field name="name" placeholder="Name" />
          <ErrorMessage name="name" />
        </label>

        <label>
          Number
          <Field name="number" placeholder="Number phone" type="tel" />
          <ErrorMessage name="number" />
        </label>

        <button type="submit">Submit</button>
      </StyledForm>
    </Formik>
  );
};
