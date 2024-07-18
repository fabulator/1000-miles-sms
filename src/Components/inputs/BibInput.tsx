import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { FormValues } from '../../Form';
import { setBibToLocalStorage } from '../../utils/useBibFromLocalStorage';
import { Input } from './ui/Input';

export const BibInput = () => {
  const intl = useIntl();
  const { register } = useFormContext<FormValues>();

  return (
    <Input
      {...register('bib', {
        max: {
          message: intl.formatMessage({
            defaultMessage: 'Bib number can have maximum of 4 digits.',
            id: 'bib.max',
          }),
          value: 9999,
        },
        min: {
          message: intl.formatMessage({
            defaultMessage: 'Bib number must be greater than zero.',
            id: 'bib.min',
          }),
          value: 1,
        },
        required: intl.formatMessage({
          defaultMessage: 'Fill the bib number.',
          id: 'bib.required',
        }),
        valueAsNumber: true,
      })}
      data-testid={'bib-input'}
      label={intl.formatMessage({
        defaultMessage: 'Bib Number',
        id: 'bib.label',
      })}
      labelDataTestid={'bib-label'}
      placeholder={'123'}
      type={'number'}
      onChange={(event) => {
        const bib = Number(event.target.value);
        setBibToLocalStorage(bib > 0 ? bib.toString() : undefined);
      }}
    />
  );
};
