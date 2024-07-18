import { Radio as ChakraRadio } from '@chakra-ui/react';
import { forwardRef, useId } from 'react';

type Props = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'id' | 'type' | 'value'
> & { value: string };

export const Radio = forwardRef<HTMLInputElement, Props>(
  ({ value, ...rest }, ref) => {
    const id = useId();

    return (
      <ChakraRadio
        {...rest}
        colorScheme={'blue'}
        id={id}
        inputProps={rest}
        ref={ref}
        size={'lg'}
        type={'radio'}
        value={value}
      >
        {value}
      </ChakraRadio>
    );
  },
);
