import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { MockForm } from '../../__mocks__/MockForm';
import { renderWithIntl } from '../../__mocks__/renderWithIntl';
import { BibInput } from './BibInput';

const user = userEvent.setup();

describe('Bib Input', () => {
  it('focuses on the element, when element is not filled', async () => {
    renderWithIntl(
      <MockForm>
        <BibInput />
      </MockForm>,
    );

    await user.click(screen.getByText('Submit'));

    expect(screen.getByTestId(`bib-input`)).toHaveFocus();
  });

  it('displays an error when value bellow zero', async () => {
    renderWithIntl(
      <MockForm>
        <BibInput />
      </MockForm>,
    );

    await user.type(screen.getByTestId('bib-input'), '-1');

    await user.click(screen.getByText('Submit'));

    expect(
      screen.getByText('Bib number must be greater than zero.'),
    ).toBeVisible();
  });

  it('displays an error when value is greater than 10000', async () => {
    renderWithIntl(
      <MockForm>
        <BibInput />
      </MockForm>,
    );

    await user.type(screen.getByTestId('bib-input'), '10000');

    await user.click(screen.getByText('Submit'));

    expect(
      screen.getByText('Bib number can have maximum of 4 digits.'),
    ).toBeVisible();
  });
});
