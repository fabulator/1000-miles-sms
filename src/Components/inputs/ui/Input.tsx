import { forwardRef, useId } from 'react';
import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { FormValues } from '../../../Form';
import { ErrorMessage } from '../../ErrorMessage';

interface Props
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'id' | 'size'
  > {
  label: string;
  labelDataTestid?: string;
  name: keyof FormValues;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, labelDataTestid, name, ...rest }, ref) => {
    const id = useId();

    const {
      formState: { errors },
    } = useFormContext<FormValues>();

    return (
      <FormControl isRequired isInvalid={!!errors[name]}>
        <FormLabel data-testid={labelDataTestid} htmlFor={id}>
          {label}
        </FormLabel>
        <ChakraInput {...rest} id={id} name={name} ref={ref} size={'lg'} />
        <FormErrorMessage>
          <ErrorMessage fieldError={errors[name]} />
        </FormErrorMessage>
      </FormControl>
    );
  },
);
