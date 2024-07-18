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
import { csMessages } from './csMessages';
import { Form } from './Form';

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
        messages={locale === 'cs' ? csMessages : undefined}
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
