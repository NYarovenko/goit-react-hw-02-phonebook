import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 8px;
`;

export const StyledField = styled(Field)`
  margin-left: 10px;
  padding: 4px;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  margin-left: 10px;
  color: red;
`;

export const StyledButton = styled.button`
  width: fit-content;
  margin-top: 10px;
  padding: 4px;
  border-radius: 4px;
`;
