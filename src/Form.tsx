import { Button, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { BibInput } from './Components/inputs/BibInput';
import { Location } from './Components/inputs/Location';
import { Status } from './Components/inputs/Status';
import { TextArea } from './Components/inputs/ui/Textarea';
import { formatSMS } from './utils/formatSMS';
import { useBibFromLocalStorage } from './utils/useBibFromLocalStorage';

export type FormValues = {
  bib: number;
  equipment: number;
  latitude: string;
  longitude: string;
  mental: number;
  message: string;
  physical: number;
};

interface Props {
  phoneNumber: string;
}

export const Form = ({ phoneNumber }: Props) => {
  const defaultBib = useBibFromLocalStorage();
  const intl = useIntl();

  const form = useForm<FormValues>({ defaultValues: { bib: defaultBib } });

  const { handleSubmit, register, reset } = form;

  return (
    <FormProvider {...form}>
      <form
        noValidate
        onSubmit={(event) => {
          void handleSubmit((data) => {
            reset({
              bib: defaultBib,
              equipment: undefined,
              latitude: '',
              longitude: '',
              mental: undefined,
              message: '',
              physical: undefined,
            });
            window.open(
              `sms://+${phoneNumber};?&body=${encodeURIComponent(
                formatSMS({
                  bib: data.bib,
                  equipment: data.equipment,
                  location: {
                    latitude: data.latitude,
                    longitude: data.longitude,
                  },
                  mental: data.mental,
                  message: data.message,
                  physical: data.physical,
                }),
              )}`,
              '_blank',
            );
          })(event);
          event.preventDefault();
        }}
      >
        <VStack align={'stretch'} spacing={4}>
          <BibInput />

          <Location />
          <TextArea
            {...register('message', {
              required: intl.formatMessage({
                defaultMessage: 'Fill the message.',
                id: 'message.required',
              }),
            })}
            data-testid={'message-input'}
            label={intl.formatMessage({
              defaultMessage: 'Message',
              id: 'message.label',
            })}
            labelDataTestid={'message-label'}
          />
          <Status
            label={intl.formatMessage({
              defaultMessage: 'Mental state',
              id: 'mental.label',
            })}
            name={'mental'}
            requiredMessage={intl.formatMessage({
              defaultMessage: 'Fill your mental state.',
              id: 'mental.required',
            })}
          />
          <Status
            label={intl.formatMessage({
              defaultMessage: 'Physical state',
              id: 'physical.label',
            })}
            name={'physical'}
            requiredMessage={intl.formatMessage({
              defaultMessage: 'Fill your physical state.',
              id: 'physical.required',
            })}
          />
          <Status
            label={intl.formatMessage({
              defaultMessage: 'Equipment state',
              id: 'equipment.label',
            })}
            name={'equipment'}
            requiredMessage={intl.formatMessage({
              defaultMessage: 'Fill state of your equipment.',
              id: 'equipment.required',
            })}
          />
          <Text>
            <FormattedMessage
              defaultMessage={'Bigger number = better state.'}
              id={'status'}
            />
          </Text>
          <Button colorScheme={'blue'} type={'submit'}>
            <FormattedMessage defaultMessage={'Open SMS App'} id={'submit'} />
          </Button>
        </VStack>
      </form>
    </FormProvider>
  );
};
