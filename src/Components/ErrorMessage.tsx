import { FieldError } from 'react-hook-form';

interface Props {
  fieldError?: FieldError;
}

export const ErrorMessage = ({ fieldError }: Props) => {
  if (!fieldError) {
    return null;
  }

  if (typeof fieldError.message !== 'string') {
    throw new Error('Invalid error');
  }

  return fieldError.message;
};
