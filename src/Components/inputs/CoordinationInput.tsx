import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { FormValues } from '../../Form';
import { getCoordinationSign } from '../../utils/coordinations/getCoordinationSign';
import { Input } from './ui/Input';

interface Props {
  label: string;
  requiredMessage: string;
  type: 'latitude' | 'longitude';
}

export const CoordinationInput = ({ requiredMessage, type, label }: Props) => {
  const intl = useIntl();
  const { register } = useFormContext<FormValues>();

  return (
    <Input
      {...register(type, {
        pattern: {
          message: intl.formatMessage({
            defaultMessage:
              'Invalid location pattern. It should be in format X99 99.999.',
            id: 'invalid.pattern',
          }),
          value: /^(N|S|E|W)[0-9]{2} [0-9]{2}\.[0-9]{3}/,
        },
        required: requiredMessage,
      })}
      data-testid={`${type}-input`}
      label={label}
      labelDataTestid={`${type}-label`}
      placeholder={`${getCoordinationSign(1, type)}00 00.000`}
    />
  );
};
