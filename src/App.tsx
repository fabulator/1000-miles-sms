import {
  Container,
  Divider,
  Heading,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { Form } from './Form';

const messages = {
  'bib.label': 'Startovní číslo',
  'bib.max': 'Startovní číslo může mít maximálně 4 číslice.',
  'bib.min': 'Startovní číslo musí být větší než nula.',
  'bib.required': 'Vyplňte startovní číslo.',
  by: 'Naprogramoval <link>Michal Ozogán</link>.',
  description:
    'Každý den mezi 18:00 a 20:00 musíte odeslat povinnou SMS. Tato aplikace neposílá SMS, ale vygeneruje zprávu podle formátu, který je nutné dodržet.',
  'equipment.label': 'Stav vybavení',
  'equipment.required': 'Vyplňte stav vašeho vybavení.',
  'invalid.pattern':
    'Neplatný formát polohy. Měl by být ve formátu X99 99.999.',
  'latitude.label': 'Zeměpisná šířka',
  'latitude.required': 'Vyplňte zeměpisnou šířku.',
  'longitude.label': 'Zeměpisná délka',
  'longitude.required': 'Vyplňte zeměpisnou délku.',
  'mental.label': 'Psychický stav',
  'mental.required': 'Vyplňte psychický stav.',
  'message.label': 'Zpráva',
  'message.required': 'Vyplňte zprávu.',
  'not-supported':
    'Váš prohlížeč nepodporuje geolokaci. Polohu musíte vepsat ručně.',
  'physical.label': 'Fyzický stav',
  'physical.required': 'Vyplňte fyzický stav.',
  'position.error': 'Při získávání polohy došlo k chybě {error}',
  'position.last': 'Poslední aktualizace polohy: {from}',
  reload: 'Znovu načíst polohu',
  status: 'Čím větší číslo, tím lepší stav',
  submit: 'Otevřít SMS aplikaci',
  title: 'Povinné SMS',
};

interface Props {
  locale?: 'cs' | 'en';
}

export const App = ({ locale = 'en' }: Props) => {
  useEffect(() => {
    document.title = 'SMS 1000 Miles Adventure';
  }, []);

  return (
    <Container>
      <IntlProvider
        defaultLocale={locale}
        locale={locale}
        messages={locale === 'cs' ? messages : undefined}
      >
        <VStack align={'stretch'} spacing={4}>
          <Heading size={'2xl'}>
            <FormattedMessage defaultMessage={'Mandatory SMS'} id={'title'} />
          </Heading>

          <Text>
            <FormattedMessage
              defaultMessage={
                'You have to send mandatory SMS every day between 18:00 and 20:00. This applicatation will not send the SMS for you, but it will generate a message based on required format.'
              }
              id={'description'}
            />
          </Text>

          <Form phoneNumber={'420777248036'} />
          <Divider />
          <Text>
            <FormattedMessage
              defaultMessage={'Created by <link>Michal Ozogán</link>.'}
              id={'by'}
              values={{
                link: (text) => (
                  <Link isExternal href={'https://ozogan.eu'}>
                    {text}
                  </Link>
                ),
              }}
            />
          </Text>
          <br />
        </VStack>
      </IntlProvider>
    </Container>
  );
};
