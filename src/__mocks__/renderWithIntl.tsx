import { render, RenderOptions } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

export const renderWithIntl = (
  ui: React.ReactElement,
  options?: RenderOptions,
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <IntlProvider locale={'en'}>
        {options?.wrapper ? (
          <options.wrapper>{children}</options.wrapper>
        ) : (
          children
        )}
      </IntlProvider>
    );
  };
  return render(ui, { ...options, wrapper: Wrapper });
};
