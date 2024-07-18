import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea as ChakraTextarea,
} from '@chakra-ui/react';
import { forwardRef, useId } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormValues } from '../../../Form';
import { ErrorMessage } from '../../ErrorMessage';

interface Props
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    'id' | 'size'
  > {
  label: string;
  labelDataTestid?: string;
  name: keyof FormValues;
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
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
        <ChakraTextarea
          {...rest}
          id={id}
          name={name}
          ref={ref}
          resize={'vertical'}
          size={'lg'}
        />
        <FormErrorMessage>
          <ErrorMessage fieldError={errors[name]} />
        </FormErrorMessage>
      </FormControl>
    );
  },
);
