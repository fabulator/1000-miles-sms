import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MockForm } from '../../__mocks__/MockForm';
import { renderWithIntl } from '../../__mocks__/renderWithIntl';
import { CoordinationInput } from './CoordinationInput';

describe('CoordinationInput', () => {
  it('should display N for placeholder for latitude', () => {
    renderWithIntl(
      <MockForm>
        <CoordinationInput
          label="Latitude"
          requiredMessage="Required"
          type="latitude"
        />
      </MockForm>,
    );

    expect(screen.getByTestId('latitude-input')).toHaveAttribute(
      'placeholder',
      'N00 00.000',
    );
  });

  it('should display E for placeholder for longitude', () => {
    renderWithIntl(
      <MockForm>
        <CoordinationInput
          label="longitude"
          requiredMessage="Required"
          type="longitude"
        />
      </MockForm>,
    );

    expect(screen.getByTestId('longitude-input')).toHaveAttribute(
      'placeholder',
      'E00 00.000',
    );
  });
});
