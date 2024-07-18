import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  RadioGroup,
  Wrap,
} from '@chakra-ui/react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormValues } from '../../Form';
import { ErrorMessage } from '../ErrorMessage';
import { Radio } from './ui/Radio';

interface Props {
  label: string;
  name: keyof FormValues;
  requiredMessage: string;
}

const radios = Array.from({ length: 10 })
  .map((_, index) => index.toString())
  .map((value) => {
    return <Radio key={value} value={value} />;
  });

export const Status = ({ label, name, requiredMessage }: Props) => {
  const {
    formState: { errors },
  } = useFormContext<FormValues>();

  return (
    <FormControl isRequired isInvalid={!!errors[name]}>
      <FormLabel>{label}</FormLabel>

      <Controller
        name={name}
        render={({ field: { value, onChange, name, onBlur } }) => {
          return (
            <RadioGroup
              key={(value as string) || 'undefined'}
              name={name}
              value={value as string}
              onBlur={onBlur}
              onChange={onChange}
            >
              <Wrap direction={'row'}>{radios}</Wrap>
            </RadioGroup>
          );
        }}
        rules={{
          required: requiredMessage,
        }}
      />

      <FormErrorMessage>
        <ErrorMessage fieldError={errors[name]} />
      </FormErrorMessage>
    </FormControl>
  );
};
