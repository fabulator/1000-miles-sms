import { DETECTORS, LocaleResolver, TRANSFORMERS } from 'locales-detector';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { App } from './App';
import './index.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

const locales = new LocaleResolver(
  [new DETECTORS.NavigatorDetector()],
  [
    new TRANSFORMERS.InvalidLocalesTransformer(),
    new TRANSFORMERS.IETFTransformer(),
    new TRANSFORMERS.FallbacksTransformer(),
    new TRANSFORMERS.InvalidLocalesTransformer({ sk: 'cs' }),
    new TRANSFORMERS.AllowOnlyTransformer(['cs', 'en']),
  ],
).getLocales() as ('cs' | 'en')[];

const locale = locales[0] || 'cs';

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ChakraProvider>
      <App locale={locale} />
    </ChakraProvider>
  </React.StrictMode>,
);
